import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames/bind"
import React, { Suspense } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import styles from "./Login.module.scss"

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Mật khẩu phải có ít nhất 8 kí tự, bao gồm cả số chữ, ít nhất 1 chữ cái viết hoa và 1 kí tự đặc biệt",
    ),
})

const cx = classNames.bind(styles)

const Login: React.FC = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  })

  const onSubmit = (data: any) => {
    navigate("/")
  }

  return (
    <div className={cx("account-page")}>
      <div className={cx("account-wrapper")}>
        <div className={cx("account-box")}>
          <div className={cx("account-container")}>
            <div className={cx("account-logo")}></div>
            <div className={cx("account-content")}>
              <div className={cx("content-inside")}>
                <h3 className={cx("account-title")}>Đăng nhập</h3>
                <p className={cx("account-subtitle")}>
                  Đăng nhập vào tài khoản của bạn
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={cx("label")}>
                    <Input
                      label="Email"
                      register={register}
                      name="email"
                      errors={errors}
                    />
                  </div>
                  <div className={cx("label")}>
                    <Input
                      label="Mật khẩu"
                      type="password"
                      register={register}
                      name="password"
                      errors={errors}
                    />
                  </div>

                  <div className={cx("label")}>
                    <div className={cx("account-password")}>
                      <Link
                        to={"/quen-mat-khau"}
                        className={cx("forgot-password")}
                      >
                        Quên mật khẩu ?
                      </Link>
                      <Link to={"/dang-ki"} className={cx("forgot-password")}>
                        Đăng kí ?
                      </Link>
                    </div>
                  </div>

                  <Suspense fallback={<></>}>
                    <Button
                      type="submit"
                      label="Đăng nhập"
                      classType={cx("btn-submit")}
                      maxWidth="100%"
                    />
                  </Suspense>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
