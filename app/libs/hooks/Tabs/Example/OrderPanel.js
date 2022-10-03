import { Divider, Stack, Text } from "@chakra-ui/react"
import { format } from "date-fns"
import data from "~/libs/data/order"

export default function OrderPanel({ orderId }) {
  const order = data.find((item) => item.id === orderId)
  console.log(order)
  return (
    <Stack px={2} width="100%">
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Text>{order.no}</Text>
        <Text>{format(new Date(order.date), "yyyy/MM/dd HH:mm")}</Text>
      </Stack>
      <Text>Customer: {order.customer.name}</Text>
      <Text>Phone: {order.customer.phone}</Text>
      <Divider />
      {order.products.map((product) => (
        <Stack
          key={"panel_" + product.id}
          direction="row"
          sx={{
            fontSize: "14px",
            "& > *": { flexBasis: "16.5%" },
            fontVariantNumeric: "tabular-nums",
          }}
        >
          <Text>{product.no}</Text>
          <Text flexBasis="35%">{product.name}</Text>
          <Text textAlign="right">$ {product.price}</Text>
          <Text textAlign="center">x</Text>
          <Text textAlign="right">{product.qty}</Text>
          <Text textAlign="right">$ {product.subTotal}</Text>
        </Stack>
      ))}
      <Divider />
      <Text textAlign="right">Total: ${order.total}</Text>
    </Stack>
  )
}
