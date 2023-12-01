import React from "react"
import styles from "./Button.module.scss"
import classNames from "classnames/bind"

type ButtonProps = {
  maxWidth?: string
  type?: "button" | "submit"
  disabled?: boolean
  label: string
  classType?: string
  borderRadius?: string
  icon?: React.ReactNode
  largeBtn?: boolean
  primaryBtn?: boolean
  secondBtn?: boolean
  blackBtn?: boolean

  onClick?: () => void
  children?: any
}

const cx = classNames.bind(styles)

const Button = ({
  maxWidth,
  type = "button",
  disabled = false,
  blackBtn = false,
  label,
  classType = "",
  borderRadius,
  largeBtn,
  icon,
  primaryBtn,
  secondBtn,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      style={{ maxWidth, borderRadius }}
      type={type}
      disabled={disabled}
      className={cx("button", classType, {
        styleDisable: disabled,
        "large-btn": largeBtn,
        "primary-btn": primaryBtn,
        "second-btn": secondBtn,
        "black-btn": blackBtn,
      })}
      onClick={onClick}
      {...props}
    >
      {icon ? <i>{icon}</i> : null}
      {label}
      {children && children}
    </button>
  )
}

export default Button
