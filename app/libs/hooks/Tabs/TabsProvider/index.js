import { createContext } from "react"

const TabsContext = createContext({})

export const TabsProvider = ({ children }) => {
  return <TabsContext.Provider>{children}</TabsContext.Provider>
}
