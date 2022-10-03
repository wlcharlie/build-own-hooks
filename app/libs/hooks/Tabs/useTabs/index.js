import { useCallback, useReducer } from "react"

/**
 * the ideal of data format will be:
 * { id: 0001, ...restData }
 * there will always has a id of each data.
 */
const initValue = {
  currentTab: null,
  storedTabs: [],
}

const tabsReducer = (state, action) => {
  const type = action.type
  const payload = action.payload

  switch (type.toUpperCase()) {
    case "ADD": {
      if (state.storedTabs.some((tab) => tab.id === payload.id)) {
        return {
          ...state,
          currentTab: payload.id,
        }
      }

      return {
        ...state,
        currentTab: payload.id,
        storedTabs: [...state.storedTabs, payload],
      }
    }
    case "REMOVE": {
      const newStoredTabs = state.storedTabs.filter((tab) => tab.id !== payload)

      return {
        ...state,
        currentTab: newStoredTabs?.at(-1)?.id || null,
        storedTabs: newStoredTabs,
      }
    }
    case "NAVIGATE": {
      return {
        ...state,
        currentTab: payload,
      }
    }
    case "RESET": {
      return initValue
    }
    case "ONLY": {
      const only = state.storedTabs.find((tab) => tab.id === payload)

      return {
        currentTab: payload,
        storedTabs: only ? [only] : [],
      }
    }
    default: {
      throw new Error("[useTabs] dispatch has received non exist type")
    }
  }
}

export default function useTabs() {
  const [state, dispatch] = useReducer(tabsReducer, initValue)

  const tabDispatch = useCallback(
    (type, payload) => dispatch({ type, payload }),
    []
  )

  return [state, tabDispatch]
}
