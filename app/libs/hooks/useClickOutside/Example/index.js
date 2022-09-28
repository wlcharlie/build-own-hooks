import { useState } from "react"
import { Text, Stack, Button, Portal } from "@chakra-ui/react"
import useClickOutside from "~/libs/hooks/useClickOutside"

function Dialog({ open, onClose }) {
  const ref = useClickOutside(onClose)

  return (
    <Stack
      w="100vw"
      h="100vh"
      position="fixed"
      left="0"
      top="0"
      align="center"
      justify="center"
      bg="#00000085"
    >
      <Stack
        ref={ref}
        w="300px"
        h="200px"
        bg="white"
        align="center"
        justify="center"
        borderRadius={1}
      >
        <Text>{"Hello (ﾉ>ω<)ﾉ"}</Text>
        <Text>{"Try click outside!"}</Text>
        <Button colorScheme="red" onClick={onClose}>
          Close
        </Button>
      </Stack>
    </Stack>
  )
}

function PortalDialog(props) {
  if (!props.open) return null

  return (
    <Portal>
      <Dialog {...props} />
    </Portal>
  )
}

export default function Playground() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <Button onClick={handleToggle}>Open</Button>
      <PortalDialog open={open} onClose={handleToggle} />
    </>
  )
}
