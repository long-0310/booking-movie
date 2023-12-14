import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames/bind"
import { Suspense, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import {
  confirmCreateNewPassword,
  forgotPassword,
  loginReducer,
  resetConfirmCodeSuccess,
} from "../../../redux/slice/Login/Login"
import styles from "./ForgotPassword.module.scss"

const cx = classNames.bind(styles)

const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { confirmForgotPasswordSuccess, confirmCodeSuccess } =
    useAppSelector(loginReducer)

  const schema = yup.object().shape({
    email: yup.string().email("Email không hợp lệ"),

    confirmCode: yup.string(),
    newPassword: yup
      .string()

      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Mật khẩu phải có ít nhất 8 kí tự, bao gồm cả số chữ, ít nhất 1 chữ cái viết hoa và 1 kí tự đặc biệt",
      ),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Mật khẩu xác nhận không khớp"),
  })

  const resolver = yupResolver(
    confirmForgotPasswordSuccess
      ? (schema.shape({
          confirmCode: yup.string().required("Vui lòng nhập mã xác nhận"),
          newPassword: yup
            .string()
            .required("Vui lòng nhập mật khẩu")
            .matches(
              /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
              "Mật khẩu phải có ít nhất 8 kí tự, bao gồm cả số chữ, ít nhất 1 chữ cái viết hoa và 1 kí tự đặc biệt",
            ),
          confirmPassword: yup
            .string()
            .oneOf([yup.ref("newPassword")], "Mật khẩu xác nhận không khớp"),
        }) as any)
      : (schema.shape({
          email: yup
            .string()
            .email("Email không hợp lệ")
            .required("Vui lòng nhập email"),
        }) as any),
  )

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver })

  const handleFormSubmit = (data: any) => {
    if (confirmForgotPasswordSuccess) {
      const form = { ...data }
      delete form.confirmPassword
      dispatch(confirmCreateNewPassword(form))
    } else {
      dispatch(forgotPassword(data))
    }
  }

  useEffect(() => {
    reset()
  }, [confirmForgotPasswordSuccess])

  useEffect(() => {
    if (confirmCodeSuccess) {
      navigate("/login")
    }
    return () => {
      dispatch(resetConfirmCodeSuccess({}))
    }
  }, [confirmCodeSuccess])

  return (
    <div className={cx("account-page")}>
      <div className={cx("account-wrapper")}>
        <div className={cx("account-box")}>
          <div className={cx("account-container")}>
            <div className={cx("account-logo")}></div>
            <div className={cx("account-content")}>
              <div className={cx("content-inside")}>
                <h3 className={cx("account-title")}>Quên mật khẩu</h3>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div className={cx("label")}>
                    <Input
                      label={
                        !confirmForgotPasswordSuccess ? "Email" : "Mã xác nhận"
                      }
                      register={register}
                      name={
                        !confirmForgotPasswordSuccess ? "email" : "confirmCode"
                      }
                      errors={errors}
                    />
                  </div>

                  {confirmForgotPasswordSuccess && (
                    <>
                      <div className={cx("label")}>
                        <Input
                          label="Mật khẩu mới"
                          register={register}
                          type="password"
                          name="newPassword"
                          errors={errors}
                        />
                      </div>
                      <div className={cx("label")}>
                        <Input
                          label="Nhập lại mật khẩu"
                          type="password"
                          register={register}
                          name="confirmPassword"
                          errors={errors}
                        />
                      </div>
                    </>
                  )}

                  <Suspense fallback={<></>}>
                    <Button
                      type="submit"
                      label={
                        !confirmForgotPasswordSuccess ? "Gửi email" : "Xác nhận"
                      }
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
