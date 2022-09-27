import {
  Input,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Button,
  Stack,
} from "@chakra-ui/react"
import { useState } from "react"
import { useAuth } from "~/libs/hooks/Auth/AuthProvider"
import { getUser } from "~/libs/data/users"

export default function DashBoard() {
  const { handleLogin } = useAuth()

  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleClick = async () => {
    //do some api call
    setLoading(true)
    setError(false)
    try {
      const userData = await getUser(username)
      handleLogin(userData)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(error.message)
    }
    //if ok do authCTX login
  }

  return (
    <Stack gap={2}>
      <Text>Please Login To Proceed</Text>
      <FormControl w="400px" isInvalid={error}>
        <FormLabel>Username</FormLabel>
        <Input
          type="email"
          variant="filled"
          onChange={(e) => setUsername(e.target.value)}
        />
        {error ? (
          <FormErrorMessage>{error}</FormErrorMessage>
        ) : (
          <FormHelperText>
            Just type one of below and click login
          </FormHelperText>
        )}
      </FormControl>
      <Text>Try Charlie, Danny, Hugh, or YT</Text>
      <Button
        alignSelf="flex-start"
        colorScheme="blue"
        onClick={handleClick}
        isLoading={loading}
      >
        Login
      </Button>
    </Stack>
  )
}
