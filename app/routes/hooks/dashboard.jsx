import { Outlet, useNavigate } from "@remix-run/react"
import { ClientOnly } from "remix-utils"
import { Spinner } from "@chakra-ui/react"
import { AuthProvider } from "~/libs/hooks/Auth"
import { getMe } from "~/libs/data/users"

export default function DashBoardIndex() {
  const navigate = useNavigate()

  const handleAfterLogin = (data) => {
    localStorage.setItem("token", data.token)
    navigate("/hooks/dashboard/demo-1")
  }

  const handleToLoginPage = () => {
    localStorage.removeItem("token")
    navigate("/hooks/dashboard/login")
  }

  return (
    <ClientOnly fallback={<Spinner />}>
      {() => (
        <AuthProvider
          debug
          onLogin={handleAfterLogin}
          onLogout={handleToLoginPage}
          validation={getMe}
          token={localStorage.getItem("token")}
        >
          <Outlet />
        </AuthProvider>
      )}
    </ClientOnly>
  )
}
