import React, { useRef } from "react"
import "./MovieTrailerPopup.scss"
import useClickOutside from "../../hook/useClickOutside"
import { useNavigate } from "react-router-dom"
import ReactPlayer from "react-player"
interface MoviePopupI {
  setShowOption: React.Dispatch<React.SetStateAction<boolean>>
  trailerUrl: string
}

const MovieTrailerPopup = ({ setShowOption, trailerUrl }: MoviePopupI) => {
  const ref = useRef<HTMLDivElement>()

  useClickOutside(ref, () => {
    setShowOption(false)
  })

  return (
    <div className="mb_booking_popup" style={{ display: "block" }}>
      <div className="mb-bp-container">
        <div
          className="container-video "
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <ReactPlayer url={trailerUrl} />
          <div
            className="mb-close"
            style={{ display: "flex" }}
            onClick={() => setShowOption(false)}
          >
            x
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieTrailerPopup
