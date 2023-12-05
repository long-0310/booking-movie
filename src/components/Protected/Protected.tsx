import classNames from "classnames/bind"
import { useState } from "react"
import styles from "./Protected.module.scss"
import HomePage from "../../pages/HomePage"
import Header from "../Header"
import { Route, Routes } from "react-router-dom"
import Footer from "../Footer"
import MovieDetail from "../../pages/MovieDetail"

const Protected = () => {
  const cx = classNames.bind(styles)
  const [openOnClick, setOpenOnClick] = useState(true)
  const [menuActive, setMenuActive] = useState(true)

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
