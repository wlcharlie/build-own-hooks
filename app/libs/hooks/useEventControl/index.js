import { useCallback, useEffect, useRef, useState } from "react"

//目前的寫法是debounce for event ?
export default function useEventControl(cb, delay) {
  const timeoutRef = useRef(null)
  const [isPending, setIsPending] = useState(false)
  const argsRef = useRef(null)

  const startEvent = useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    argsRef.current = args
    setIsPending(true)
  }, [])

  const cancelEvent = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsPending(false)
  }, [])

  useEffect(() => {
    if (isPending) {
      timeoutRef.current = setTimeout(() => {
        cb(...argsRef.current)
        setIsPending(false)
      }, delay)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [isPending])

  return [startEvent, isPending, cancelEvent]
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
