import { useState, useCallback } from "react"

export default function useToggle(props = {}) {
  const { defaultState, onOn, onOff } = props

  if (defaultState !== undefined && typeof defaultState !== "boolean") {
    throw new Error("UseToggle: defaultState should be Boolean")
  }

  const [state, setState] = useState(defaultState || false)

  const toggleOn = useCallback(() => {
    setState(true)
    onOn?.()
  }, [])

  const toggleOff = useCallback(() => {
    setState(false)
    onOff?.()
  }, [])

  const toggle = useCallback(() => {
    const action = state ? toggleOff : toggleOn
    action()
  }, [state])

  return { isOn: state, toggle, toggleOn, toggleOff }
}
