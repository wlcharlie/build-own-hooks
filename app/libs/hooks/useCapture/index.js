import { useRef } from "react"
import html2canvas from "html2canvas"

export default function useCapture({ fileName, ...options } = {}) {
  const ref = useRef(null)

  const handleCapture = async () => {
    if (!ref.current) return
    const canvas = await html2canvas(ref.current, options)
    const link = document.createElement("a")
    link.download = fileName || "image.png"
    link.href = await canvas.toDataURL()
    link.click()
  }

  return [ref, handleCapture]
}
