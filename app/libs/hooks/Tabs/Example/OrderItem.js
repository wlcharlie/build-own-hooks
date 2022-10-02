import { Button } from "@chakra-ui/react"
export default function OrderItem(props) {
  return (
    <Button
      w="100%"
      colorScheme="teal"
      variant="ghost"
      fontSize="sm"
      size="small"
      justifyContent="flex-start"
      borderRadius="0px"
      p={1}
      color="white"
      sx={{ "&:hover": { color: "teal" }, fontVariantNumeric: "tabular-nums" }}
      {...props}
    />
  )
}
