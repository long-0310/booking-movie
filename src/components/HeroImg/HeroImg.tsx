import React from "react"
import "./HeroImg.scss"

type Props = {}

const HeroImg = (props: Props) => {
  return (
    <div className="movie-detail-hero">
      <div className="movie-detail-background-overlay"></div>
      <div className="movie-detail-container">
        <div className="cover_color"></div>
        <div className="header_banner_el">
          <h1 className=" header_title">Wrong Turns Part 2 </h1>
          <span>John Doe - 12 Thursday</span>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
