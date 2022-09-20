import { useEffect, useState, useRef } from "react"
import { Button, Stack, Text } from "@chakra-ui/react"
import CircularProgress from "./CircularProgress"
import useThrottle from ".."

function Timer({ value }) {
  const timerRef = useRef(null)
  const [time, updateTime] = useState(0)

  useEffect(() => {
    if (value === 0 && !timerRef.current) {
      updateTime(0)
    }

    if (value !== 0 && !timerRef.current) {
      timerRef.current = setInterval(() => updateTime((prev) => prev + 1), 1000)
    }

    if (value === 100) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [value])

  return <Text>{time}s</Text>
}

export default function Example() {
  const [value, setValue] = useState(0)

  const throttledEvent = useThrottle(setValue, 450)

  const handleClick = () => {
    throttledEvent((prev) => {
      const nextValue = prev + 1

      return nextValue >= 100 ? 100 : nextValue
    })
  }

  return (
    <Stack align="center">
      <Timer value={value} />
      <CircularProgress value={value} onClick={handleClick} />
      <Button onClick={() => setValue(0)} disabled={value !== 100}>
        RESET
      </Button>
    </Stack>
  )
}
