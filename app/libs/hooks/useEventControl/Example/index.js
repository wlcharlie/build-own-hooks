import { Button, Stack } from "@chakra-ui/react"
import useEventControl from ".."

export default function Example() {
  const [debounce, isPending, cancel] = useEventControl(handleClick, 2000)

  function handleClick(a) {
    alert("AA" + a)
  }

  return (
    <Stack>
      <Button onClick={() => debounce("YOOO")} isLoading={isPending}>
        TRIGGER
      </Button>
      <Button onClick={cancel}>CANCEL</Button>
    </Stack>
  )
}
