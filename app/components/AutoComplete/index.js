import { useState } from "react"
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Stack,
  Button,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverBody,
  Text,
  Progress,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import useToggle from "~/libs/hooks/useTogglePlus"

export default function AutoComplete({
  data,
  inputValue,
  onInputChange,
  value,
  onChange,
  isLoading,
}) {
  const { isOn, toggle, toggleOn, toggleOff } = useToggle()

  const [displayValue, setDisplayValue] = useState("")

  const handleChoose = (value) => () => {
    toggleOff()
    onChange(value)
    onInputChange("")
    setDisplayValue(value)
  }

  return (
    <Popover
      isOpen={isOn}
      onClose={toggleOff}
      matchWidth
      closeOnBlur={false}
      isLazy
      lazyBehavior="keepMounted"
    >
      <PopoverAnchor>
        <InputGroup>
          <Input
            variant="filled"
            placeholder="type to search"
            onFocus={toggleOn}
            value={inputValue || displayValue}
            onChange={(e) => onInputChange(e.target.value)}
          />
          <InputRightElement pointerEvents="none">
            <IconButton
              variant="unstyled"
              colorScheme="teal"
              fontSize="20px"
              icon={isOn ? <ChevronUpIcon /> : <ChevronDownIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </PopoverAnchor>
      <PopoverContent w="100%">
        <PopoverBody>
          <Stack>
            {isLoading ? (
              <Progress size="xs" isIndeterminate />
            ) : (
              <>
                {data.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    justifyContent="left"
                    onClick={handleChoose(item)}
                  >
                    {item}
                  </Button>
                ))}
                {data.length === 0 && (
                  <Text sx={{ px: 2, py: 1, color: "gray.400" }}>
                    No option
                  </Text>
                )}
              </>
            )}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
