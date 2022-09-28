import { useRef, useEffect } from "react"

export default function useClickOutside(cb) {
  const ref = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target

      const isInside = ref.current.contains(target)

      //since the approach is do the magic when is outside
      if (!isInside) {
        //do the job

        cb()
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return ref
}
