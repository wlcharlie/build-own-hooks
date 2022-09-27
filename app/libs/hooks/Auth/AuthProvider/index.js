import { useLocation } from "@remix-run/react"
import {
  useReducer,
  useMemo,
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react"
import { Skeleton } from "@chakra-ui/react"
import useEventRef from "~/libs/hooks/useEventRef"

const AuthContext = createContext()

const authReducer = (state, action) => {
  switch (action.type.toUpperCase()) {
    case "LOGIN": {
      return { ...action.payload, isAuth: true }
    }
    case "LOGOUT": {
      return { isAuth: false }
    }
    default: {
      return { isAuth: false }
    }
  }
}

export const AuthProvider = ({
  children, //required
  localStorageKey = "token",
  onLogin,
  onLogout,
  validation, // required
  initValidation,
  debug = false,
}) => {
  const location = useLocation()
  console.log(location)
  const onLoginCallback = useEventRef(onLogin)
  const onLogoutCallback = useEventRef(onLogout)
  const [state, dispatch] = useReducer(authReducer, { isAuth: false })

  const [validating, setValidating] = useState(false)

  if (debug) {
    console.log("AuthProvider:", state)
  }

  useEffect(() => {
    console.log("RE-VALI")
    if (initValidation) {
      initValidation()
      return
    }

    const defaultValidation = async () => {
      const storageToken = localStorage.getItem(localStorageKey)
      if (!storageToken) {
        handleLogout()
        return
      }

      setValidating(true)
      try {
        const data = await validation?.(storageToken)
        dispatch({ type: "LOGIN", payload: data })
      } catch (error) {
        console.log(error.message)
        handleLogout()
      }
      setValidating(false)
    }

    defaultValidation()
  }, [location.pathname])

  const handleLogin = useCallback((data) => {
    dispatch({ type: "LOGIN", payload: data })
    if (localStorageKey) {
      localStorage.setItem(localStorageKey, data[localStorageKey])
    }
    onLoginCallback?.()
  }, [])

  const handleLogout = useCallback(() => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem(localStorageKey)
    onLogoutCallback?.()
  }, [])

  const value = useMemo(
    () => ({ state, actions: { handleLogin, handleLogout } }),
    [state]
  )

  return (
    <AuthContext.Provider value={value}>
      <Skeleton isLoaded={!validating}>{children}</Skeleton>
    </AuthContext.Provider>
  )
}

export const useMe = () => useContext(AuthContext).state
export const useAuth = () => useContext(AuthContext).actions
