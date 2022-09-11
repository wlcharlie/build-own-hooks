import { theme as chakraTheme, extendTheme } from "@chakra-ui/react"
import scrollBarStyles from "./scrollbar"

const theme = extendTheme({
  ...chakraTheme,
  styles: {
    global: {
      ...scrollBarStyles,
      "*": {
        margin: 0,
        padding: 0,
      },
      "html, body, #root": {
        width: "100%",
        height: "100%",
      },
      body: {
        backgroundColor: "#E5E5E5",
        fontFamily: `'Inter', 'Noto Sans TC', sans-serif`,
      },
      hr: {
        margin: "8px 0",
        borderColor: chakraTheme.colors.blackAlpha[200],
      },
      "pre:has(.hljs)": {
        borderRadius: 4,
        overflow: "hidden",
      },
      ".mdx-prose": {
        h1: {
          fontSize: "4xl",
        },
        h2: {
          fontSize: "3xl",
        },
        h3: {
          fontSize: "2xl",
        },
        h4: {
          fontSize: "xl",
        },
        h5: {
          fontSize: "lg",
        },
        h6: {
          fontSize: "md",
        },
      },
    },
  },
})

export default theme
