import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import Protected from "./components/Protected"
import ConfirmCode from "./pages/Authen/ConfirmCode"
import ForgotPassword from "./pages/Authen/ForgotPassword"
import Login from "./pages/Authen/Login"
import Register from "./pages/Authen/Register"
import { useAppDispatch } from "./redux/hooks"
// import { resetAuthUserState } from "./redux/slice/Login/Login"

function App() {
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   const storedAuthUser = localStorage.getItem("accessToken")
  //   console.log(storedAuthUser)
  //   if (storedAuthUser) {
  //     dispatch(resetAuthUserState(storedAuthUser))
  //   }
  // }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              // <PrivateRoute>
              <Protected />
              // </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-code" element={<ConfirmCode />} />
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
