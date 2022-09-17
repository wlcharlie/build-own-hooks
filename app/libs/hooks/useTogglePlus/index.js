import { useState, useCallback, useEffect, useRef } from "react"

//TODO 改成已經建立好的版本
function useEventRef(callback, deps) {
  const eventRef = useRef(callback)

  useEffect(() => {
    eventRef.current = callback
  }, deps)

  return () => eventRef.current?.()
}

export default function useToggle(props = {}) {
  const { defaultState, onOn, onOff } = props

  if (defaultState !== undefined && typeof defaultState !== "boolean") {
    throw new Error("UseToggle: defaultState should be Boolean")
  }
  const [state, setState] = useState(defaultState || false)

  const onOnEventCallback = useEventRef(onOn)
  const onOffEventCallback = useEventRef(onOff)

  const toggleOn = useCallback(() => {
    setState(true)
    onOnEventCallback()
  }, [])

  const toggleOff = useCallback(() => {
    setState(false)
    onOffEventCallback()
  }, [])

  const toggle = useCallback(() => {
    const action = state ? toggleOff : toggleOn
    action()
  }, [state])

  return { isOn: state, toggle, toggleOn, toggleOff }
}
