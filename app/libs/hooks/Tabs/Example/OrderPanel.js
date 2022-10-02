import { Stack, Text } from "@chakra-ui/react"
import data from "~/libs/data/order"

export default function OrderPanel({ orderId }) {
  const order = data.find((item) => item.id === orderId)
  console.log(order)
  return (
    <Stack>
      <Text>{order.no}</Text>
    </Stack>
  )
}
