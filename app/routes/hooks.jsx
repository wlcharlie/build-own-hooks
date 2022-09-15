import fs from "fs"
import path from "path"
import { json } from "@remix-run/node"
// import styles from "highlight.js/styles/base16/darcula.css"
import styles from "highlight.js/styles/night-owl.css"

import { Outlet, Link, useLoaderData } from "@remix-run/react"
import { Flex, Stack, Container } from "@chakra-ui/react"

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ]
}

export const loader = async () => {
  const hooksPostsDir = path.join(process.cwd(), "app/routes/hooks")
  const fileNames = fs.readdirSync(hooksPostsDir)

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "")
    let title = id
      .split("-")
      .map((word, index) => {
        if (index === 0) return word //since is always the word "use"
        if (word === "plus") return "+"
        if (word === "normal") return ""
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join("")

    return {
      id,
      name: title,
    }
  })

  return json(allPostsData)
}

export default function HooksIndex() {
  const links = useLoaderData()

  return (
    <Flex>
      <Stack bgColor="white" pt={2} px={4} position="sticky" top="0" h="100vh">
        {links.map((link) => (
          <Link
            key={link.id}
            to={`/hooks/${link.id}`}
            style={{ textDecoration: "none" }}
          >
            {link.name}
          </Link>
        ))}
      </Stack>
      <Container
        maxW="container.md"
        pt={5}
        mb={5}
        flex="1"
        display="flex"
        gap={2}
        flexDirection="column"
        overflow="auto"
        className="mdx-prose" //[temporarily] for mdx styling
      >
        <Outlet />
      </Container>
    </Flex>
  )
}
