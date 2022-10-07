import { useRef, useState, useEffect } from "react"

export default function useImages() {
  const inputRef = useRef()
  const [images, setImages] = useState([])

  const handleUpload = (e) => {
    const images = [...e.target.files].map((file) => {
      return {
        name: file.name,
        url: URL.createObjectURL(file),
      }
    })
    setImages(images)
  }

  const handleRemove = (itemIndex) => {
    setImages((prev) =>
      prev.filter((img, index) => {
        if (index === itemIndex) {
          URL.revokeObjectURL(img.url)
        }
        return index !== itemIndex
      })
    )
  }

  const handleClearAll = () => {
    setImages([])
  }

  useEffect(() => {
    if (images.length === 0) {
      if (inputRef.current) {
        inputRef.current.value = ""
      }
    }
  }, [images])

  return {
    images,
    handleUpload,
    handleRemove,
    handleClearAll,
    inputRef,
  }
}
