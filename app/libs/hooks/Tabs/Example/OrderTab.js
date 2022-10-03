import { forwardRef } from "react"
import {
  useTab,
  useMultiStyleConfig,
  IconButton,
  HStack,
  Box,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Stack,
  Button,
} from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"

const OrderTab = forwardRef((props, ref) => {
  const { isOpen, onToggle, onClose: onPopClose } = useDisclosure()
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref })
  const {
    children,
    onClose,
    onChoose,
    onCloseAll,
    onCloseOthers,
    isSelected,
    ...restTabProps
  } = tabProps

  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig("Tabs", tabProps)

  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onPopClose}
        placement="right"
      >
        <PopoverTrigger>
          <HStack sx={{ cursor: "pointer", gap: 1, position: "relative" }}>
            <Box
              __css={styles.tab}
              {...restTabProps}
              sx={{ pr: "30px" }}
              fontSize="sm"
              aria-selected={isSelected}
              onClick={onChoose}
              onContextMenu={(e) => {
                e.preventDefault()
                onToggle()
              }}
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
        </PopoverTrigger>

        <PopoverContent w="fit-content" onClick={onPopClose}>
          <PopoverBody>
            <Stack align="flex-start">
              <Button size="sm" w="100%" variant="ghost" onClick={onClose}>
                Close
              </Button>
              <Button size="sm" w="100%" variant="ghost" onClick={onCloseAll}>
                Close All
              </Button>
              <Button
                size="sm"
                w="100%"
                variant="ghost"
                onClick={onCloseOthers}
              >
                Close Others
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  )
})
OrderTab.displayName = "OrderTab"

export default OrderTab
