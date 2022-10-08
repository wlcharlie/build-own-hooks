import { Button, Stack, Text, Box } from "@chakra-ui/react"
import useCapture from ".."
export default function Example() {
  const [ref, handleCapture] = useCapture()

  return (
    <>
      <Button w="320px" onClick={handleCapture}>
        Download
      </Button>
      <div
        ref={ref}
        style={{
          width: "230px",
          height: "400px",
          border: "1px solid",
          background: "white",
          padding: "4px 4px 4px 4px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          lineHeight: "1rem",
        }}
      >
        <h5>Order Info</h5>
        <p>Order No.: OR2210180002</p>
        <p>Date: 2022/10/18</p>
        <p>Customer: Charlie</p>
        <p>Phone: 0912345678</p>
        <hr />
        <p>Book x1 $100</p>
        <p>Book x1 $100</p>
        <p>Total: $200</p>
      </div>
    </>
  )
}
