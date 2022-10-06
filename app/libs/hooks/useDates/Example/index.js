import {
  Text,
  Stack,
  HStack,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import useDates from "../"

export default function Example({ configs }) {
  const [dates, datesDispatch] = useDates(configs)

  return (
    <Stack bg="white" borderRadius={4} p={3}>
      <Text>
        Date: {dates[0]} ~ {dates[1]}
      </Text>
      <HStack alignItems="center" gap={1}>
        <Input
          colorScheme="blue"
          variant="flushed"
          type="date"
          value={dates[0]}
          onChange={(e) => datesDispatch("FIRST_TO", e.target.value)}
        />
        <Input
          colorScheme="blue"
          variant="flushed"
          type="date"
          value={dates[1]}
          onChange={(e) => datesDispatch("SECOND_TO", e.target.value)}
        />
        <Button colorScheme="teal" onClick={() => datesDispatch("NOW")}>
          TODAY
        </Button>
        <IconButton
          colorScheme="blue"
          icon={<ChevronLeftIcon fontSize="1.5rem" />}
          onClick={() => datesDispatch("BACKWARD")}
        />
        <IconButton
          colorScheme="blue"
          icon={<ChevronRightIcon fontSize="1.5rem" />}
          onClick={() => datesDispatch("FORWARD")}
        />
      </HStack>
    </Stack>
  )
}
