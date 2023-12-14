import classNames from "classnames/bind"
import styles from "./Footer.module.scss"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Button from "../Button"
import Input from "../Input"
const cx = classNames.bind(styles)

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
})

type Props = {}

const Footer = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  })

  return (
    <div className={cx("footer")}>
      <div className={cx("footer-box")}>
        <div className={cx("footer-box-inside")}>
          <div className={cx("footer-box-top")}>
            <div className={cx("top-left")}>
              <img
                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png"
                alt=""
              />
            </div>
            <div className={cx("top-right")}>
              <div className={cx("text-top")}>
                <span>Trợ giúp</span> / <span>Điều Khoản</span>
              </div>
              <div className={cx("right-list-icon")}>
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span>
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span>
                  <i className="fa-brands fa-pinterest"></i>
                </span>
              </div>
            </div>
          </div>
          <div className={cx("footer-box-bottom")}>
            <div className={cx("footer-box-bottom-inside")}>
              <div className={cx("footer-box-fist")}>
                <div className={cx("title")}>
                  Mua vé xem phim dễ dàng với hệ thống Aovis trên toàn quốc
                </div>
                <div className={cx("btn-footer")}>
                  <Button label="Đặt vé ngay" primaryBtn />
                </div>
              </div>
              <div className={cx("footer-box-second")}>
                <div className={cx("top-title-footer")}>
                  <h2>Phim</h2>
                </div>
                <div className={cx("top-list-footer")}>
                  <ul>
                    <li>
                      <a href="">Hành động</a>
                    </li>
                    <li>
                      <a href="">Phiêu lưu</a>
                    </li>
                    <li>
                      <a href="">Kì ảo</a>
                    </li>
                    <li>
                      <a href="">Giật gân</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx("footer-box-second")}>
                <div className={cx("top-title-footer")}>
                  <h2>Thông tin</h2>
                </div>
                <div className={cx("top-list-footer")}>
                  <ul>
                    <li>
                      <a href="">Vè chúng tôi</a>
                    </li>
                    <li>
                      <a href="">Tài khoản</a>
                    </li>
                    <li>
                      <a href="">Bài viết </a>
                    </li>
                    <li>
                      <a href="">Liên hệ </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx("footer-box-end")}>
                <div className={cx("top-title-footer")}>
                  <h2>Bản tin</h2>
                </div>
                <p>Đăng ký nhận bản tin Leitmotif ngay ngày hôm nay.</p>
                <Input
                  placeholder="Send Email"
                  register={register}
                  name="email"
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
