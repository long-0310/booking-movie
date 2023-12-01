import React from "react"
import "./BoxIcon.scss"

type IconBoxProps = {
  title: string
  subTitle: string
}

const BoxIcon = ({ subTitle, title }: IconBoxProps) => {
  return (
    <div className="ticket-icon-box">
      <div className="ticket-box">
        <div
          className="background"
          style={{
            backgroundImage: `url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/bg-film-01.png')`,
          }}
        />
        <div className="overlay"></div>
        <div className="content">
          <p className="sub-title">{title}</p>
          <h3 className="title">{subTitle}</h3>
        </div>
        <span className="icon">
          <i className="fa-solid fa-masks-theater"></i>
        </span>
      </div>
    </div>
  )
}

export default BoxIcon
