import { useState } from "react"
import { Button, Fade, Flex, Tag } from "@chakra-ui/react"
import StyledBox from "./StyledBox"
import useToggle from ".."

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
