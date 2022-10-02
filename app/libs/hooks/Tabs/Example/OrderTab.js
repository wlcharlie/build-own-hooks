import { forwardRef } from "react"
import {
  useTab,
  useMultiStyleConfig,
  IconButton,
  HStack,
  Box,
} from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"
const OrderTab = forwardRef((props, ref) => {
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref })
  const { children, onClose, onChoose, isSelected, ...restTabProps } = tabProps

  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig("Tabs", tabProps)

  return (
    <HStack sx={{ cursor: "pointer", gap: 1, position: "relative" }}>
      <Box
        __css={styles.tab}
        {...restTabProps}
        sx={{ pr: "30px" }}
        fontSize="sm"
        aria-selected={isSelected}
        onClick={onChoose}
      >
        {children}
      </Box>
      <IconButton
        size="xs"
        variant="ghost"
        isRound
        onClick={onClose}
        sx={{ position: "absolute", right: "2px" }}
      >
        <CloseIcon />
      </IconButton>
    </HStack>
  )
})
OrderTab.displayName = "OrderTab"

export default OrderTab
