import { useState } from "react"
import useIntersectionObserver from "../useIntersectionObserver"

export default function useInView(options) {
  const [isInView, setIsInView] = useState(null)

  const handleInView = (entries, observe) => {
    entries.forEach((entry) => {
      setIsInView(entry.isIntersecting)
    })
  }

  const targetRef = useIntersectionObserver(handleInView, {
    ...options,
    root: options?.root?.current || null,
  })

  return [targetRef, isInView]
}
