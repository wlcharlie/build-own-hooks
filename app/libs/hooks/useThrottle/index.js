import { useRef } from "react"

export default function useThrottle(cb, time = 500) {
  const isEnableRef = useRef(true)

  return (...args) => {
    if (!isEnableRef.current) {
      return
    }
    isEnableRef.current = false

    cb(...args)
    setTimeout(() => {
      isEnableRef.current = true
    }, time)
  }
}
