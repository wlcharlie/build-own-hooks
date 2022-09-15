import { Tag, Flex } from "@chakra-ui/react"

export default function PostTags({ tags }) {
  return (
    <Flex gap={1}>
      {tags.split(",").map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Flex>
  )
}
