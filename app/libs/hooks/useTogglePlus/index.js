import { useState, useCallback } from "react"
import useEventRef from "~/libs/hooks/useEventRef"

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
