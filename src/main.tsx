import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import App from "./App"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"
import Styles from "./scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  // <React.StrictMode>
  <Styles>
    <Provider store={store}>
      <App />
    </Provider>
  </Styles>,
  // </React.StrictMode>
)
