import { Button, Stack } from "@chakra-ui/react"
import useEventControl from ".."

function showAlert(msg) {
  alert("Message:" + msg)
}

export default function Example() {
  const [startEvent, isPending, cancelEvent] = useEventControl(showAlert, 2000)

  return (
    <Stack>
      <Button onClick={() => startEvent("YO")} isLoading={isPending}>
        TRIGGER
      </Button>
      <Button onClick={cancelEvent}>CANCEL</Button>
    </Stack>
  )
}
