import classNames from "classnames/bind"
import { Route, Routes } from "react-router-dom"
import Booking from "../../pages/BookingMovie/BookingMovie"
import HomePage from "../../pages/HomePage"
import MovieDetail from "../../pages/MovieDetail"
import Movies from "../../pages/Movies/Movies"
import Footer from "../Footer"
import Header from "../Header"
import styles from "./Protected.module.scss"

const Protected = () => {
  const cx = classNames.bind(styles)

  const menu = [
    {
      path: "*",
      component: <HomePage />,
      isView: true,
    },
    {
      path: "/movie",
      component: <MovieDetail />,
      isView: true,
    },
    {
      path: "/movie-booking",
      component: <Booking />,
      isView: true,
    },
    {
      path: "/movies",
      component: <Movies />,
      isView: true,
    },
  ]

  return (
    <div>
      <Header />

      <Routes>
        {menu.map(
          (element, index) =>
            element.isView && (
              <Route
                path={`/${element.path}`}
                element={element.component}
                key={String(index)}
              />
            ),
        )}
      </Routes>
      <Footer />
    </div>
  )
}

export default Protected
