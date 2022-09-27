import { useState } from "react"
import { Container, Stack, Button, Portal } from "@chakra-ui/react"
import useOnOutSide from "~/libs/hooks/useOnOutside"

function Dialog({ open, onClose }) {
  const ref = useOnOutSide(onClose)

  return (
    <Stack
      w="100vw"
      position="fixed"
      inset="auto"
      align="center"
      justify="center"
    >
      <Stack ref={ref} w="300px" h="300px" bg="salmon">
        Normal Block
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
    setOpen((p) => !p)
  }
  return (
    <Container>
      Playground!
      <Button onClick={handleToggle}>Open</Button>
      <PortalDialog open={open} onClose={handleToggle} />
    </Container>
  )
}
