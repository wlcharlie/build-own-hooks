import { Outlet, useNavigate } from "@remix-run/react"
import { ClientOnly } from "remix-utils"
import { Spinner } from "@chakra-ui/react"
import { AuthProvider } from "~/libs/hooks/Auth"

export default function DashBoardIndex() {
  const navigate = useNavigate()

  const handleAfterLogin = () => {
    navigate("/hooks/dashboard/demo-1")
  }

  const handleToLoginPage = () => {
    navigate("/hooks/dashboard/login")
  }

  return (
    <ClientOnly fallback={<Spinner />}>
      {() => (
        <AuthProvider
          debug
          onLogin={handleAfterLogin}
          onLogout={handleToLoginPage}
        >
          <Outlet />
        </AuthProvider>
      )}
    </ClientOnly>
  )
}
