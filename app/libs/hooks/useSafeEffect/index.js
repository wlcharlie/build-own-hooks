import { useEffect, useLayoutEffect } from "react"

const useSafeEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export default useSafeEffect
