import { useState } from "react"
import AutoComplete from "~/components/AutoComplete"
import { getUsers } from "~/libs/data/users"

export default function Example() {
  const [choose, setChoose] = useState("")
  const [input, setInput] = useState("")
  const users = getUsers({ name: input, limit: 5 })

  return (
    <AutoComplete
      data={users}
      inputValue={input}
      onInputChange={setInput}
      value={choose}
      onChange={setChoose}
    />
  )
}
