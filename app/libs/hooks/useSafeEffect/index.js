import { useEffect, useLayoutEffect } from "react"

export default function useSafeEffect() {
  return typeof window !== "undefined" ? useLayoutEffect : useEffect
}
