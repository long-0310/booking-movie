import classNames from "classnames/bind"
import styles from "./Sidebar.module.scss"
import { Link } from "react-router-dom"
import Button from "../Button"
type SlideProps = {
  imageUrl: string
  category: string
  name: string
  setShowOption?: any
  description: string
  id: number
}
const Sidebar = ({
  imageUrl,
  category,
  name,
  description,
  id,
  setShowOption,
}: SlideProps) => {
  const cx = classNames.bind(styles)
  return (
    <div className={cx("side-bar")}>
      <div className={cx("side-bar-bg-img")}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={cx("box-container")}>
        <div className={cx("movie-release")}>
          <span className={cx("text")}>In theater</span>
          <h3 className={cx("time")}>March 2023</h3>
        </div>
        <div className={cx("box-container-inside")}>
          <div className={cx("movie-main-item")}>
            <div className={cx("movie-heading")}>
              <h3 className={cx("movie-category")}>{category}</h3>
              <Link to="/">
                <h1 className={cx("movie-title")}>{name}</h1>
              </Link>
            </div>
            <p className={cx("movie-excerpt")}>Đạo diễn bởi {description}</p>
            <div className={cx("button-wrapper")}>
              <div className={cx("left-button")}>
                <Link to={`/movie/${id}`}>
                  <Button largeBtn secondBtn label="Thông tin" />
                </Link>
              </div>
              <div
                className={cx("left-button")}
                onClick={() => setShowOption(id)}
              >
                <Button largeBtn primaryBtn label="Mua vé" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
