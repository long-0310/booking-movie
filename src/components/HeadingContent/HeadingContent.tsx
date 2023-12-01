import React from "react"
import "./HeadingContent.scss"

interface IHeadingContentProps {
  subTitle: string
  title: string
  leftContent?: boolean
  textColor?: boolean
}

const HeadingContent = ({
  title,
  subTitle,
  leftContent = false,
  textColor = false,
}: IHeadingContentProps) => {
  return (
    <div className={`header-box ${leftContent && "left-content"}`}>
      <div className="icon-header">
        <i className="fa-solid fa-clapperboard"></i>
      </div>

      <div className="top-heading ">
        <h3 className="sub-title ">{subTitle}</h3>

        <h2 className={`title ${textColor && "text-color"}`}>{title}</h2>
      </div>
    </div>
  )
}

export default HeadingContent
