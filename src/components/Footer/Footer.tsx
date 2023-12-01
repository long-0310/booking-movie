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
                <span>Help</span> / <span>Privacy Policy</span>
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
                  Buy movie tickets easily with Aovis system nationwide{" "}
                </div>
                <div className={cx("btn-footer")}>
                  <Button label="Get Your Ticket" primaryBtn />
                </div>
              </div>
              <div className={cx("footer-box-second")}>
                <div className={cx("top-title-footer")}>
                  <h2>Movies</h2>
                </div>
                <div className={cx("top-list-footer")}>
                  <ul>
                    <li>
                      <a href=""> Action </a>
                    </li>
                    <li>
                      <a href="">Adventure </a>
                    </li>
                    <li>
                      <a href="">Animation </a>
                    </li>
                    <li>
                      <a href="">Comedy </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx("footer-box-second")}>
                <div className={cx("top-title-footer")}>
                  <h2>Movies</h2>
                </div>
                <div className={cx("top-list-footer")}>
                  <ul>
                    <li>
                      <a href=""> Action </a>
                    </li>
                    <li>
                      <a href="">Adventure </a>
                    </li>
                    <li>
                      <a href="">Animation </a>
                    </li>
                    <li>
                      <a href="">Comedy </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx("footer-box-end")}>
                <div className={cx("top-title-footer")}>
                  <h2>Newsletter</h2>
                </div>
                <p>Subscribe to Leitmotif newsletter this very day</p>
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
