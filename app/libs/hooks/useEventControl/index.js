import { useCallback, useEffect, useRef, useState } from "react"
import useEventRef from "../useEventRef"

//目前的寫法是debounce for event ?
export default function useEventControl(cb, delay) {
  const timeoutRef = useRef(null)
  const [isPending, setIsPending] = useState(false)
  const eventCbRef = useEventRef(cb)
  const argsRef = useRef({})

  const debounce = useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    argsRef.current = args
    setIsPending(true)
  }, [])

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsPending(false)
  }, [])

  useEffect(() => {
    if (isPending) {
      timeoutRef.current = setTimeout(() => {
        eventCbRef(...argsRef.current)
        setIsPending(false)
      }, delay)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isPending])

  return [debounce, isPending, cancel]
}

// export default function useDebounce() {
//   const timeoutRefs = useRef([])

//   const wrapper = (cb, delay) => {
//     const timeoutRef = createRef()

//     const debounce = (...args) => {
//       timeoutRef.current = setTimeout(() =>{
//          cb(...args)
// //仍要清除timeoutRefs的 但方法不順
//         }, delay)
//       timeoutRefs.current.push(timeoutRef.current)
//     }

//     return [debounce, timeoutRef]
//   }

//   const cancel = (timeoutIdParam) => {
//     if (timeoutRefs.current.includes(timeoutIdParam)) {
//       clearTimeout(timeoutIdParam)
//     }
//   }

//   useEffect(() => {
//     return () => {
//       timeoutRefs.current.forEach((timeoutIdRef) => clearTimeout(timeoutIdRef))
//     }
//   }, [])

//   return [wrapper, cancel]
// }
