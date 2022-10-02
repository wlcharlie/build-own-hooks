import { VStack, Stack, Text, Divider } from "@chakra-ui/react"
export default function OrderList({ children, ...props }) {
  return (
    <VStack
      h="100%"
      flex="1.2"
      bg="teal.600"
      color="white"
      align="flex-start"
      px={1}
      overflowY="scroll"
      {...props}
    >
      <Stack
        position="sticky"
        top={0}
        bgColor="inherit"
        w="100%"
        h="100%"
        zIndex={2}
      >
        <Text p={1}>Orders</Text>
        <Divider />
      </Stack>
      {children}
    </VStack>
  )
}
