import {
  Input,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Stack,
} from "@chakra-ui/react"
import { useState } from "react"
import { useAuth } from "~/libs/hooks/Auth/AuthProvider"

export default function DashBoard() {
  const { handleLogin } = useAuth()
  const [username, setUsername] = useState("")

  const handleClick = () => {
    //do some api call

    //if ok do authCTX login
    handleLogin({ username })
  }

  return (
    <Stack gap={2}>
      <Text>Please Login To Proceed</Text>
      <FormControl w="300px">
        <FormLabel>Username</FormLabel>
        <Input
          type="email"
          variant="filled"
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormHelperText>Just type anything and click login</FormHelperText>
      </FormControl>
      <Button alignSelf="flex-start" colorScheme="blue" onClick={handleClick}>
        Login
      </Button>
    </Stack>
  )
}
