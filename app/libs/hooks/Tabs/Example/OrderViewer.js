import { VStack } from "@chakra-ui/react"
export default function OrderViewer(props) {
  return (
    <VStack
      h="100%"
      w="100%"
      maxW="520px"
      flex="3"
      bg="white"
      align="flex-start"
      {...props}
    />
  )
}
