import { useState, useCallback } from "react"

export default function useToggle(defaultState = false) {
  if (typeof defaultState !== "boolean") {
    throw new Error("UseToggle: defaultState should be Boolean")
  }

  const [state, setState] = useState(defaultState)

  const toggle = useCallback(() => setState((prev) => !prev), [])

  return [state, toggle]
}
