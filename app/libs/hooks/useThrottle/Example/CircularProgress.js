import {
  IconButton,
  CircularProgress as CircularProgressBar,
  CircularProgressLabel,
} from "@chakra-ui/react"
import { GiClick } from "react-icons/gi"

export default function CircularProgress({ value, onClick }) {
  return (
    <CircularProgressBar value={value} size="120px" color="orange.400">
      <CircularProgressLabel>
        <IconButton
          onClick={onClick}
          bgColor="transparent"
          icon={<GiClick />}
          fontSize="40px"
          w="90px"
          h="90px"
          borderRadius="50%"
          disabled={value === 100}
        />
      </CircularProgressLabel>
    </CircularProgressBar>
  )
}
