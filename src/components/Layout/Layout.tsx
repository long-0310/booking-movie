import classNames from "classnames/bind"
import styles from "./Layout.module.scss"

const cx = classNames.bind(styles)
const Layout = ({ children }: any) => {
  return <div className={cx("layout-movie-booking")}>{children}</div>
}

export default Layout
