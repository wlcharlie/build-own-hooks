import { useRef, useCallback } from "react"
import useSafeEffect from "../useSafeEffect"

export default function useEventRef(callback) {
  if (callback && typeof callback !== "function") {
    throw new Error(
      "[useEventRef] callback that passed into hook should be a function."
    )
  }

  const eventRef = useRef(callback)

  useSafeEffect(() => {
    eventRef.current = callback
  })

  return useCallback((...args) => eventRef.current?.(...args), [])
}
