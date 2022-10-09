import { useEffect, useRef, forwardRef, useState } from "react"
import { Box, HStack, Stack, Tag, Text } from "@chakra-ui/react"
import useIntersectionObserver from "../../useIntersectionObserver"
import useInView from ".."

function Pointer({ text, ...props }) {
  return (
    <Stack
      position="absolute"
      width="60px"
      height="1px"
      bg="black"
      top="0"
      right="-50px"
      {...props}
    >
      <Text
        position="absolute"
        right="0"
        top="-8px"
        bg="#E5E5E5"
        border="1px solid"
        borderRadius="4px"
        fontSize="12px"
        lineHeight="12px"
        p="1px"
        width="30px"
        textAlign="center"
      >
        {text}
      </Text>
    </Stack>
  )
}

const Item = forwardRef((props, ref) => {
  return (
    <Box
      w="200px"
      minH="200px"
      bg="salmon"
      ref={ref}
      {...props}
      position="relative"
      transition="background-color 0.2s"
    >
      <Pointer top="0%" text="0" />
      <Pointer top="50%" text="0.5" />
      <Pointer top="100%" text="1.0" />
    </Box>
  )
})
Item.displayName = "Item"

export default function Example() {
  const containerRef = useRef(null)
  const [blueBoxRef, isBlueBoxInView] = useInView()

  const [colorToken, setColorToken] = useState(".100")
  const [isYellowBoxInView, setIsYellowBoxInView] = useState(false)

  const [isGreenBoxAround, setIsGreenBoxAround] = useState(false)
  const greenBoxRef = useIntersectionObserver(handleGreenBoxIntersection, {
    root: containerRef,
    rootMargin: "0px 0px 100px 0px",
  })

  function handleGreenBoxIntersection(entries, observer) {
    entries.forEach((entry) => {
      setIsGreenBoxAround(entry.isIntersecting)
    })
  }

  const yellowBoxRef = useIntersectionObserver(handleYellowBoxIntersection, {
    threshold: [0, 0.5, 1],
  })

  function handleYellowBoxIntersection(entries, observer) {
    entries.forEach((entry) => {
      setIsYellowBoxInView(entry.isIntersecting)

      const ratio = entry.intersectionRatio

      let token = ""
      if (ratio >= 0) {
        token = ".100"
      }

      if (ratio >= 0.5) {
        token = ".400"
      }

      if (ratio === 1) {
        token = ".700"
      }

      setColorToken(token)
    })
  }

  return (
    <Stack bg="white" p={1}>
      <HStack>
        <Tag colorScheme={isYellowBoxInView ? "yellow" : "gray"}>
          [Yellow Box] {isYellowBoxInView ? "In View!!" : "Not in view..."}
        </Tag>
        <Tag colorScheme={isGreenBoxAround ? "green" : "gray"}>
          [Green Box] {isGreenBoxAround ? "Around!" : "Not around"}
        </Tag>
        <Tag colorScheme={isBlueBoxInView ? "blue" : "gray"}>
          [Blue Box] {isBlueBoxInView ? "In View!!" : "Not in view..."}
        </Tag>
      </HStack>
      <Stack
        maxH="300px"
        overflowY="scroll"
        py={5}
        gap={4}
        ref={containerRef}
        border="1px solid"
      >
        <Item />
        <Item />
        <Item bg={`yellow` + colorToken} ref={yellowBoxRef} />
        <Item bg="green.500" ref={greenBoxRef} />
        <Item bg="blue.500" ref={blueBoxRef} />
        <Item />
        <Item />
      </Stack>
    </Stack>
  )
}
