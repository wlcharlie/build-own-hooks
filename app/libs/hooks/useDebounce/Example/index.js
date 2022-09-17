import { useState } from "react"
import { HStack, Stack, Tag, Text } from "@chakra-ui/react"
import AutoComplete from "~/components/AutoComplete"
import useDebounce from ".."
import { getUsers } from "~/libs/data/users"

export default function Example() {
  const [choose, setChoose] = useState("")
  const [input, setInput] = useState("")
  const [delayInput, setDelayInput] = useState("")
  const isLoading = useDebounce(() => setDelayInput(input), 2000, [input])
  const users = getUsers({ name: delayInput, limit: 5 })

  return (
    <>
      <Stack
        bgColor="white"
        borderRadius={4}
        p={1}
        justify="flex-start"
        align="flex-start"
      >
        <HStack>
          <Tag colorScheme="green">input</Tag>
          <Text>{input}</Text>
        </HStack>
        <HStack>
          <Tag colorScheme="green">delayInput</Tag>
          <Text>{delayInput}</Text>
        </HStack>
        <HStack sx={{ opacity: isLoading ? 1 : 0.2 }}>
          <Tag colorScheme="pink">setTimeout</Tag>
          <Text>{isLoading ? "pending" : "idle"}</Text>
        </HStack>
      </Stack>
      <AutoComplete
        data={users}
        inputValue={input}
        onInputChange={setInput}
        value={choose}
        onChange={setChoose}
        isLoading={isLoading}
      />
    </>
  )
}
