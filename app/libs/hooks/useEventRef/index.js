import { useRef, useCallback } from "react"
import useSafeEffect from "../useSafeEffect"

export default function useEventRef(callback, deps) {
  if (typeof callback !== "function") {
    throw new Error(
      "[useEventRef] callback that passed into hook should be a function."
    )
  }

  if (deps && !Array.isArray(deps)) {
    throw new Error(
      "[useEventRef] deps that passed into hook should be an array."
    )
  }

  const eventRef = useRef(callback)

  useSafeEffect(() => {
    eventRef.current = callback
  }, deps)

  return useCallback((...args) => eventRef.current?.(...args), [])
}
