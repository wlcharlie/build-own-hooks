import {
  Text,
  Stack,
  HStack,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import useDate from "../"

export default function Example({ configs }) {
  const [date, dateDispatch] = useDate(configs)

  return (
    <Stack bg="white" borderRadius={4} p={3}>
      <Text>Date: {date}</Text>
      <HStack alignItems="center" gap={1}>
        <Input
          colorScheme="blue"
          variant="flushed"
          type="date"
          value={date}
          onChange={(e) => dateDispatch("TO", e.target.value)}
        />
        <Button colorScheme="teal" onClick={() => dateDispatch("NOW")}>
          TODAY
        </Button>
        <IconButton
          colorScheme="blue"
          icon={<ChevronLeftIcon fontSize="1.5rem" />}
          onClick={() => dateDispatch("BACKWARD")}
        />
        <IconButton
          colorScheme="blue"
          icon={<ChevronRightIcon fontSize="1.5rem" />}
          onClick={() => dateDispatch("FORWARD")}
        />
      </HStack>
    </Stack>
  )
}
