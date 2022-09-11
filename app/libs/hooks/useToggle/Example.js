import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react"
import useToggle from "."

export default function Example() {
  const [isOpen, toggle] = useToggle()
  return (
    <>
      <Button onClick={toggle}>TOGGLE</Button>
      <Modal isOpen={isOpen} onClose={toggle} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hello (´・ω・`)</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
