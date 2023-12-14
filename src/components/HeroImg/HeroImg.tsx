import React from "react"
import "./HeroImg.scss"

type Props = {
  backgroundImageUrl: string
  title?: string
  time?: string
  director?: string
  description?: string
  onlyBackground?: boolean
}

const HeroImg = ({
  backgroundImageUrl,
  title,
  director,
  time,
  description,
  onlyBackground,
}: Props) => {
  return (
    <div className="movie-detail-hero">
      <div
        className="movie-detail-background-overlay"
        style={{ backgroundImage: `url("${backgroundImageUrl}")` }}
      ></div>
      <div className="movie-detail-container">
        <div className="cover_color"></div>
        <div className="header_banner_el">
          {onlyBackground ? (
            <h1 className=" header_title">{description}</h1>
          ) : (
            <>
              <h1 className=" header_title">{title}</h1>
              <span>
                {director} - {time}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroImg
