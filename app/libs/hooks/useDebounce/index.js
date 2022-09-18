import { useEffect, useRef, useState } from "react"

export default function useDebounce(cb, delay = 250, deps) {
  const initRef = useRef(true)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    if (initRef.current) {
      initRef.current = false
      return
    }

    setIsPending(true)
    const timeout = setTimeout(() => {
      cb()
      setIsPending(false)
    }, delay)

    return () => clearTimeout(timeout)
  }, deps)

  return isPending
}
