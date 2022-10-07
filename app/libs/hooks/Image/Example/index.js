import { useState, useRef, useEffect } from "react"
import {
  Button,
  Text,
  HStack,
  Stack,
  Divider,
  IconButton,
} from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"
function Image({ url, name, onRemove }) {
  return (
    <Stack
      bgImage={`url(${url})`}
      w="200px"
      h="200px"
      bgPos="center"
      bgSize="cover"
      pos="relative"
    >
      <HStack
        pos="absolute"
        bottom="0"
        w="100%"
        color="white"
        bgColor="#00000080"
        px={1}
        py={0.5}
        justifyContent="space-between"
      >
        <Text
          maxWidth="80%"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {name}
        </Text>
        {onRemove && (
          <IconButton onClick={onRemove} isRound variant="ghost" size="sm">
            <CloseIcon color="red" />
          </IconButton>
        )}
      </HStack>
    </Stack>
  )
}

export default function Example() {
  const inputRef = useRef()
  const [image, setImage] = useState(null)

  const handleUpload = (e) => {
    const file = e.target.files[0]
    const imageURL = URL.createObjectURL(file)

    setImage({ name: file.name, url: imageURL })
  }

  const handleRemove = () => {
    setImage(null)
    inputRef.current.value = ""
  }

  //

  const inputsRef = useRef()
  const [images, setImages] = useState([])

  const handleUploads = (e) => {
    const images = [...e.target.files].map((file) => {
      return {
        name: file.name,
        url: URL.createObjectURL(file),
      }
    })
    setImages(images)
  }

  const handleRemoves = (itemIndex) => {
    setImages((prev) => prev.filter((item, index) => index !== itemIndex))
  }

  const handleClearAll = () => {
    setImages([])
  }

  useEffect(() => {
    if (images.length === 0) {
      inputsRef.current.value = ""
    }
  }, [images])

  return (
    <>
      <HStack>
        <label
          htmlFor="file-input"
          style={{
            width: "fit-content",
          }}
        >
          <input
            ref={inputRef}
            type="file"
            id="file-input"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
          <Button as="span">Upload One Image</Button>
        </label>
        {image && (
          <>
            <Text> {image && image.name}</Text>
            <IconButton onClick={handleRemove}>
              <CloseIcon />
            </IconButton>
          </>
        )}
      </HStack>
      {image && <Image url={image.url} name={image.name} />}
      <Divider />
      <HStack>
        <label
          htmlFor="files-input"
          style={{
            width: "fit-content",
          }}
        >
          <input
            ref={inputsRef}
            type="file"
            id="files-input"
            multiple={true}
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleUploads}
          />
          <Button as="span">Upload A Lot of Images</Button>
        </label>
        <Button onClick={handleClearAll}>Remove all</Button>
      </HStack>
      {images.length > 0 && (
        <HStack>
          {images.map((img, index) => (
            <Image
              key={img.name}
              url={img.url}
              name={img.name}
              onRemove={() => handleRemoves(index)}
            />
          ))}
        </HStack>
      )}
    </>
  )
}
