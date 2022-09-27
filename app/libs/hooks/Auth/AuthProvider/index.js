import {
  useReducer,
  useMemo,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react"
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
  const onLoginCallback = useEventRef(onLogin)
  const onLogoutCallback = useEventRef(onLogout)
  const [state, dispatch] = useReducer(authReducer, { isAuth: false })

  if (debug) {
    console.log("AuthProvider:", state)
  }

  useEffect(() => {
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

      try {
        const data = await validation?.(storageToken)
        handleLogin(data)
      } catch (error) {
        localStorage.clear("token")
        handleLogout()
      }
    }

    defaultValidation()
  }, [])

  const handleLogin = useCallback((data) => {
    dispatch({ type: "LOGIN", payload: data })
    onLoginCallback?.()
  }, [])

  const handleLogout = useCallback(() => {
    dispatch({ type: "LOGOUT" })
    onLogoutCallback?.()
  }, [])

  const value = useMemo(
    () => ({ state, actions: { handleLogin, handleLogout } }),
    [state]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useMe = () => useContext(AuthContext).state
export const useAuth = () => useContext(AuthContext).actions
