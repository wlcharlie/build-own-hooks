import React, { useContext, useEffect } from "react"
import { withEmotionCache } from "@emotion/react"
import { ChakraProvider } from "@chakra-ui/react"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

import theme from "./theme"

import { ServerStyleContext, ClientStyleContext } from "./context"

export const meta = () => ({
  charset: "utf-8",
  title: "Build Own Hooks",
  viewport: "width=device-width,initial-scale=1",
})

export let links = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&family=Noto+Sans+TC:wght@100;400;700&display=swap",
    },
  ]
}

const Document = withEmotionCache(({ children }, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext)
  const clientStyleData = useContext(ClientStyleContext)

  // Only executed on client
  useEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head
    // re-inject tags
    const tags = emotionCache.sheet.tags
    emotionCache.sheet.flush()
    tags.forEach(tag => {
      emotionCache.sheet._insertTag(tag)
    })
    // reset cache to reapply global styles
    clientStyleData?.reset()
  }, [])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
})

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  )
}
