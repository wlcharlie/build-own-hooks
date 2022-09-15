import { useRef, useEffect, useCallback } from "react"

export default function useEventRef(callback, deps = []) {
  if (typeof callback !== "function") {
    throw new Error(
      "[useEventRef] callback that passed into hook is not a function."
    )
  }

  if (!Array.isArray(deps)) {
    throw new Error("[useEventRef] deps that passed into hook is not an array.")
  }

  const eventRef = useRef(callback)

  useEffect(() => {
    eventRef.current = callback
  }, deps)

  return useCallback((...args) => eventRef.current?.(...args), [])
}
