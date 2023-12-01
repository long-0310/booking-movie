import React from "react"
import classNames from "classnames/bind"
import styles from "./Input.module.scss"
import { ErrorIcon } from "../../assets/icons/icon"

interface InputProps {
  label?: string
  register?: any
  required?: boolean
  name: string
  type?: string
  disable?: boolean
  errors?: any
  placeholder?: string
}

const cx = classNames.bind(styles)

export default function Input({
  label,
  register,
  type = "text",
  required,
  disable = false,
  name = "",
  errors,
  placeholder,
}: InputProps) {
  return (
    <div className={cx("input-wrapper")}>
      {label && (
        <div className={cx("input-label")}>
          {label} {required && <span className={cx("input-label")}>*</span>}
        </div>
      )}
      <input
        className={cx("input-styles")}
        {...register(name)}
        disable={disable}
        type={type}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className={cx("error-text")}>{errors[name].message}</p>
      )}
    </div>
  )
}
