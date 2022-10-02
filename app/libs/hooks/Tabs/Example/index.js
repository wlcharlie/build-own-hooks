import { Tabs, TabList, Text, Alert, AlertIcon } from "@chakra-ui/react"
import useTabs from "../useTabs"
import data from "~/libs/data/order"
import OrderBoard from "./OrderBoard"
import OrderList from "./OrderList"
import OrderItem from "./OrderItem"
import OrderViewer from "./OrderViewer"
import OrderPanel from "./OrderPanel"
import OrderTab from "./OrderTab"
console.log(data)
export default function Example() {
  const [tabs, tabDispatch] = useTabs()
  const isEmpty = tabs.storedTabs.length === 0

  return (
    <OrderBoard>
      <OrderList>
        {data.map((order) => (
          <OrderItem
            key={order.id}
            justifyContent="space-between"
            onClick={() => tabDispatch("ADD", { id: order.id, no: order.no })}
          >
            <Text>{order.no}</Text>
            <Text>$ {order.total}</Text>
          </OrderItem>
        ))}
      </OrderList>
      <OrderViewer>
        {isEmpty ? (
          <Alert status="info" h="100%" colorScheme="white">
            <AlertIcon />
            Select a order from list to view.
          </Alert>
        ) : (
          <>
            <Tabs w="100%">
              <TabList w="100%" overflowX="auto" overflowY="hidden">
                {tabs.storedTabs.map((tab) => (
                  <OrderTab
                    key={tab.id}
                    isSelected={tab.id === tabs.currentTab}
                    onChoose={() => tabDispatch("NAVIGATE", tab.id)}
                    onClose={() => tabDispatch("REMOVE", tab.id)}
                  >
                    <Text>{tab.no}</Text>
                  </OrderTab>
                ))}
              </TabList>
            </Tabs>
            <OrderPanel key={tabs.currentTab} orderId={tabs.currentTab} />
          </>
        )}
      </OrderViewer>
    </OrderBoard>
  )
}
