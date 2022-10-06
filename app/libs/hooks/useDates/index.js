import { useCallback, useReducer } from "react"
import {
  add,
  format,
  isFuture,
  isPast,
  sub,
  isAfter,
  intervalToDuration,
} from "date-fns"
// {  years,  months,  weeks,  days,  hours,  minutes,  seconds}

const defaultConfigs = {
  defaultDate: null,
  formatPattern: "yyyy-MM-dd",
  transitionUnit: "days",
  offsetUnit: "days",
  offsetValue: 0,
  durationUnit: "days",
  durationDateOnIssue: 0, // 1 || 2  || 0
  minDuration: 0,
  maxDuration: 0,
  noPastDate: false,
  noFutureDate: false,
  noGreaterThenSecondDate: false,
}

function merge(a, b) {
  return { ...a, ...b }
}

function offset(date, unit, value) {
  if (value === 0) return date

  if (value > 0) {
    return add(date, { [unit]: value })
  }

  if (value < 0) {
    return sub(date, { [unit]: Math.abs(value) })
  }
}

function datesChanger(state, action) {
  const type = action.type
  const payload = action.payload
  const configs = action.configs

  switch (type.toUpperCase()) {
    case "BACKWARD": {
      return state.map((date) =>
        sub(date, { [configs.transitionUnit]: Math.abs(payload || 1) })
      )
    }
    case "FORWARD": {
      return state.map((date) =>
        add(date, { [configs.transitionUnit]: Math.abs(payload || 1) })
      )
    }
    case "NOW": {
      return [new Date(), new Date()]
    }
    case "FIRST_TO": {
      return [new Date(payload), state[1]]
    }
    case "SECOND_TO": {
      return [state[0], new Date(payload)]
    }
    default: {
      return state
    }
  }
}

function datesDurationChecker(prevDates, changedDates, action) {
  const configs = action.configs
  const durationDateOnIssue = configs.durationDateOnIssue
  const minDuration = configs.minDuration
  const maxDuration = configs.maxDuration
  const durationUnit = configs.durationUnit

  const duration = intervalToDuration({
    start: changedDates[0],
    end: changedDates[1],
  })

  const isLesser = duration[durationUnit] < minDuration
  const lesserDelta = minDuration - duration[durationUnit]
  const isLarger = duration[durationUnit] > maxDuration
  const largerDelta = duration[durationUnit] - maxDuration

  if (minDuration > 0 && isLesser) {
    if (!durationDateOnIssue) return prevDates

    return changedDates.map((date, index) => {
      if (index + 1 === durationDateOnIssue) {
        return add(date, { [durationUnit]: lesserDelta })
      }
      return date
    })
  }

  if (maxDuration > 0 && isLarger) {
    if (!durationDateOnIssue) return prevDates

    return changedDates.map((date, index) => {
      if (index + 1 === durationDateOnIssue) {
        return sub(date, { [durationUnit]: largerDelta })
      }
      return date
    })
  }

  return changedDates
}

function datesLimitationChecker(dates, action) {
  const configs = action.configs

  if (configs.noPastDate && dates.some(isPast)) {
    return false
  }

  if (configs.noFutureDate && dates.some(isFuture)) {
    return false
  }

  if (configs.noGreaterThenSecondDate && isAfter(dates[0], dates[1])) {
    return false
  }

  return true
}

function datesReducer(state, action) {
  const changedDate = datesChanger(state, action)
  const fixedDate = datesDurationChecker(state, changedDate, action)
  return datesLimitationChecker(fixedDate, action) ? fixedDate : state
}

export default function useDates(configs) {
  const mergedConfigs = merge(defaultConfigs, configs)

  const [dates, dispatch] = useReducer(
    datesReducer,
    mergedConfigs.defaultDate,
    (defaultDate) =>
      defaultDate
        ? [new Date(defaultDate), new Date(defaultDate)]
        : [new Date(), new Date()]
  )

  const datesDispatch = useCallback(
    (type, payload) => dispatch({ type, payload, configs: mergedConfigs }),
    [configs]
  )

  const offsetDates = dates.map((date) =>
    offset(date, mergedConfigs.offsetUnit, mergedConfigs.offsetValue)
  )

  const formatDate = offsetDates.map((date) =>
    format(date, mergedConfigs.formatPattern)
  )

  return [formatDate, datesDispatch]
}
