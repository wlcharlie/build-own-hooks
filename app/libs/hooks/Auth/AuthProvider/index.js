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
      return { ...state, ...action.payload, isAuth: true }
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
  onLogin,
  onLogout,
  validation, // required
  token,
  deps = [],
  debug = false,
}) => {
  const onLoginCallback = useEventRef(onLogin)
  const onLogoutCallback = useEventRef(onLogout)
  const [state, dispatch] = useReducer(authReducer, { isAuth: false })

  const [validating, setValidating] = useState(false)

  if (debug) {
    console.log("AuthProvider:", state)
  }

  useEffect(() => {
    const validate = async () => {
      setValidating(true)
      try {
        const data = await validation?.(token)
        dispatch({ type: "LOGIN", payload: { ...data, token } })
      } catch (error) {
        console.log(error.message)
        handleLogout()
      }
      setValidating(false)
    }

    validate()
  }, [state.isAuth, ...deps])

  const handleLogin = useCallback((data) => {
    dispatch({ type: "LOGIN", payload: data })
    onLoginCallback?.(data)
  }, [])

  const handleLogout = useCallback(() => {
    dispatch({ type: "LOGOUT" })
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
