import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames/bind"
import { Suspense, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import styles from "./Register.module.scss"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import {
  loginReducer,
  registerUser,
  resetRegisterSuccess,
} from "../../../redux/slice/Login/Login"

const SignUpSchema = yup.object().shape({
  userName: yup.string().required("Vui lòng nhập tên người dùng"),
  name: yup.string().required("Vui lòng nhập tên"),
  phoneNumber: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .matches(
      /([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
      "Số điện thoại không hợp lệ",
    ),
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

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp"),
})
const cx = classNames.bind(styles)
const Register = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { registerSuccess } = useAppSelector(loginReducer)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  })
  const onSubmit = (data: any) => {
    const form = { ...data }
    delete form.confirmPassword
    dispatch(registerUser(form))
  }

  useEffect(() => {
    if (registerSuccess) {
      navigate("/confirm-code")
    }
    return () => {
      dispatch(resetRegisterSuccess({}))
    }
  }, [registerSuccess])

  return (
    <div className={cx("account-page")}>
      <div className={cx("account-wrapper")}>
        <div className={cx("account-box")}>
          <div className={cx("account-container")}>
            <div className={cx("account-logo")}></div>
            <div className={cx("account-content")}>
              <div className={cx("content-inside")}>
                <h3 className={cx("account-title")}>Đăng kí</h3>
                <p className={cx("account-subtitle")}>
                  Đăng kí để tạo tài khoản cho riêng bạn
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={cx("label")}>
                    <Input
                      label="Tên người dùng"
                      register={register}
                      name="userName"
                      errors={errors}
                    />
                  </div>
                  <div className={cx("label")}>
                    <Input
                      label="Họ và Tên"
                      register={register}
                      name="name"
                      errors={errors}
                    />
                  </div>
                  <div className={cx("label")}>
                    <Input
                      label="Số điện thoại"
                      register={register}
                      name="phoneNumber"
                      errors={errors}
                    />
                  </div>
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
                    <Input
                      label="Nhập lại mật khẩu"
                      type="password"
                      register={register}
                      name="confirmPassword"
                      errors={errors}
                    />
                  </div>

                  <div className={cx("label")}>
                    <div className={cx("account-password")}>
                      Đã có tài khoản ?&nbsp;
                      <Link to={"/login"} className={cx("forgot-password")}>
                        {" "}
                        Đăng nhập
                      </Link>
                    </div>
                  </div>

                  <Suspense fallback={<></>}>
                    <Button
                      type="submit"
                      label="Đăng kí"
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

export default Register
