import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
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
