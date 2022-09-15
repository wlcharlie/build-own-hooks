import { Box } from "@chakra-ui/react"

export default function StyledBox(props) {
  return (
    <Box
      p="40px"
      color="white"
      mt="4"
      bg="teal.500"
      rounded="md"
      shadow="md"
      {...props}
    />
  )
}
