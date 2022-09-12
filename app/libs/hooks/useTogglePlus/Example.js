import { useState } from "react"
import { Button, Box, Fade, Flex, Tag } from "@chakra-ui/react"
import useToggle from "."

function StyledBox(props) {
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

export default function Example() {
  const [count, setCount] = useState(0)
  const { isOn, toggle, toggleOn, toggleOff } = useToggle({
    onOn: () => setCount(count + 1),
  })
  return (
    <>
      <Tag>Try to open count: {count}</Tag>
      <Flex gap={2} sx={{ "& > *": { flex: 1 } }}>
        <Button onClick={toggle}>TOGGLE</Button>
        <Button onClick={toggleOn}>ON</Button>
        <Button onClick={toggleOff}>OFF</Button>
      </Flex>
      <Fade in={isOn}>
        <StyledBox>Hello (´・ω・`)</StyledBox>
      </Fade>
    </>
  )
}
