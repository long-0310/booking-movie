import { yupResolver } from "@hookform/resolvers/yup"
import classNames from "classnames/bind"
import React, { Suspense, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import styles from "./ConfirmCode.module.scss"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import {
  confirmCode,
  loginReducer,
  resetConfirmCodeSuccess,
} from "../../../redux/slice/Login/Login"

const confirmCodeSchema = yup.object().shape({
  confirmCode: yup.string().required("Vui lòng nhập mã kích hoạt"),
})

const cx = classNames.bind(styles)

const ConfirmCode: React.FC = () => {
  const { confirmCodeSuccess } = useAppSelector(loginReducer)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(confirmCodeSchema),
  })

  const onSubmit = (data: any) => {
    dispatch(confirmCode(data))
  }

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
                <h3 className={cx("account-title")}>Mã kích hoạt</h3>
                <p className={cx("account-subtitle")}>
                  Vui lòng nhập mã kích hoạt
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={cx("label")}>
                    <Input
                      label="Mã kích hoạt"
                      register={register}
                      name="confirmCode"
                      errors={errors}
                    />
                  </div>

                  <div className={cx("label")}>
                    <div className={cx("account-password")}>
                      <Link to={"/login"} className={cx("forgot-password")}>
                        Đăng nhập ?
                      </Link>
                      <Link to={"/register"} className={cx("forgot-password")}>
                        Đăng kí ?
                      </Link>
                    </div>
                  </div>

                  <Suspense fallback={<></>}>
                    <Button
                      type="submit"
                      label="Gửi Mã"
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

export default ConfirmCode
