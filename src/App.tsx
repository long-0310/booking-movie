import { useEffect } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { useAppDispatch } from "./app/hooks"
import Protected from "./components/Protected"
import ForgotPassword from "./pages/Authen/ForgotPassword"
import Login from "./pages/Authen/Login"
import Register from "./pages/Authen/Register"
import PrivateRoute from "./router/PrivateRoute"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const storedAuthUser = localStorage.getItem("authUser")
    if (storedAuthUser) {
      const authUser = JSON.parse(storedAuthUser)
      // dispatch(resetAuthUserState(authUser))
    }
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Protected />
              </PrivateRoute>
            }
          />
          {/* <Route path="/*" element={<Protected />} /> */}
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/quen-mat-khau" element={<ForgotPassword />} />
          <Route path="/dang-ki" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
