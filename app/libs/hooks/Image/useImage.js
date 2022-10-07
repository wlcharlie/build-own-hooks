import { useRef, useState } from "react"

export default function useImage() {
  const inputRef = useRef(null)
  const [image, setImage] = useState(null)

  const handleUpload = (e) => {
    const file = e.target.files[0]
    const imageURL = URL.createObjectURL(file)

    setImage({ name: file.name, url: imageURL })
  }

  const handleRemove = () => {
    URL.revokeObjectURL(image.url)
    setImage(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return {
    image,
    handleUpload,
    handleRemove,
    inputRef,
  }
}
