import { Link } from "@remix-run/react"
import { Text, Button, Stack } from "@chakra-ui/react"
import { useMe, useAuth } from "~/libs/hooks/Auth/AuthProvider"

export default function DemoOne() {
  const { handleLogout } = useAuth()
  const me = useMe()

  return (
    <Stack gap={3}>
      <Text>Hello {me.username}! Welcome!</Text>
      <Text>
        You are at the page of demo one, some main stuff will might be here.
      </Text>
      <Link to="/hooks/dashboard/demo-2">To Page Demo Two</Link>
      <Button colorScheme="red" width="200px" onClick={handleLogout}>
        LOGOUT
      </Button>
    </Stack>
  )
}
