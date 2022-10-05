import { useCallback, useReducer } from "react"
import { add, format, sub } from "date-fns"
// {  years,  months,  weeks,  days,  hours,  minutes,  seconds}

const defaultConfigs = {
  defaultDate: null,
  formatPattern: "yyyy-MM-dd",
  transitionUnit: "days",
  offsetUnit: "days",
  offsetValue: 0,
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

function dateReducer(state, action) {
  const type = action.type
  const payload = action.payload
  const configs = action.configs

  switch (type.toUpperCase()) {
    case "BACKWARD": {
      return sub(state, { [configs.transitionUnit]: Math.abs(payload || 1) })
    }
    case "FORWARD": {
      return add(state, { [configs.transitionUnit]: Math.abs(payload || 1) })
    }
    case "NOW": {
      return new Date()
    }
    case "TO": {
      return new Date(payload)
    }
    default: {
      return state
    }
  }
}

export default function useDate(configs) {
  const mergedConfigs = merge(defaultConfigs, configs)

  const [date, dispatch] = useReducer(
    dateReducer,
    mergedConfigs.defaultDate,
    (defaultDate) => (defaultDate ? new Date(defaultDate) : new Date())
  )

  const dateDispatch = useCallback(
    (type, payload) => dispatch({ type, payload, configs: mergedConfigs }),
    [configs]
  )

  const offsetDate = offset(
    date,
    mergedConfigs.offsetUnit,
    mergedConfigs.offsetValue
  )

  const formatDate = format(offsetDate, mergedConfigs.formatPattern)

  return [formatDate, dateDispatch]
}
