import { Link } from "@remix-run/react"
import { Text, Stack } from "@chakra-ui/react"
import { useMe } from "~/libs/hooks/Auth/AuthProvider"

export default function DemoTwp() {
  const me = useMe()
  return (
    <Stack gap={3}>
      <Text>Hello {me.username}! Welcome!</Text>
      <Text>
        You are at the page of demo two, some deep or detail information might
        be here.
      </Text>
      <Link to="/hooks/dashboard/demo-1">Back to main page</Link>
    </Stack>
  )
}
