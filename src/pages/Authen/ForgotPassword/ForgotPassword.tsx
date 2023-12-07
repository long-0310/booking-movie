import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames/bind"
import React, { Suspense } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import * as yup from "yup"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import styles from "./ForgotPassword.module.scss"

const cx = classNames.bind(styles)
const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
})

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  })
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className={cx("account-page")}>
      <div className={cx("account-wrapper")}>
        <div className={cx("account-box")}>
          <div className={cx("account-container")}>
            <div className={cx("account-logo")}></div>
            <div className={cx("account-content")}>
              <div className={cx("content-inside")}>
                <h3 className={cx("account-title")}>Quên mật khẩu</h3>
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
                    <div className={cx("account-password")}>
                      <p>
                        Vui lòng nhập email đã đăng kí để cập nhật lại mật khẩu
                      </p>
                    </div>
                  </div>

                  <Suspense fallback={<></>}>
                    <Button
                      type="submit"
                      label="Gửi email"
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

export default ForgotPassword
