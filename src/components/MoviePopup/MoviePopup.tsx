import React, { useEffect, useRef, useState } from "react"
import "./MoviePopup.scss"
import useClickOutside from "../../hook/useClickOutside"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  cinemaReducer,
  getCinemaByMovie,
} from "../../redux/slice/Cinema/Cinema"
import { convertTo24HourFormat, formatDate } from "../../common/untils"

interface MoviePopupI {
  setShowOption: React.Dispatch<React.SetStateAction<boolean>>
  idMovie: string
}

const MoviePopup = ({ setShowOption, idMovie }: MoviePopupI) => {
  const ref = useRef<HTMLDivElement>()
  const dispatch = useAppDispatch()
  const [chooseCinema, setChooseCinema] = useState<any>([])
  const { listCinema } = useAppSelector(cinemaReducer)

  const navigate = useNavigate()
  useClickOutside(ref, () => {
    setShowOption(false)
  })

  const handleBookingMovie = (id: string) => {
    navigate(`/movie-booking/${id}`, {
      state: idMovie,
    })
  }

  useEffect(() => {
    if (idMovie) {
      dispatch(getCinemaByMovie({ movieId: idMovie }))
    }
  }, [idMovie])

  useEffect(() => {
    if (listCinema) {
      setChooseCinema(listCinema?.[0])
    }
  }, [listCinema])

  return (
    <div
      id="mb_booking_popup"
      className="mb_booking_popup"
      style={{ display: "block" }}
    >
      <div
        className="mb-bp-container"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className="mb-bp-content" style={{ display: "block" }}>
          {listCinema.length > 0 ? (
            <dl className="collateral-tabs">
              <dd className="tab-container current">
                <div className="tab-content mb-showtimes">
                  <div className="mb-tabs-cities">
                    <ul className="toggle-tabs">
                      {listCinema.map((cinema: any) => (
                        <li
                          className={`mb-city-name ${
                            cinema?.nameOfCinema ===
                              chooseCinema?.nameOfCinema && "current"
                          }`}
                          onClick={() => setChooseCinema(cinema)}
                        >
                          <span>{cinema.nameOfCinema}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <dl className="collateral-tabs">
                    <dt className="tab current">California </dt>
                    <dd className="tab-container current">
                      <div className="tab-content mb-room-types">
                        <dl className="collateral-tabs">
                          <dd className="tab-container current">
                            <div className="tab-content showtimes">
                              {chooseCinema?.room?.map((room: any) => (
                                <div className="mb-venue">
                                  <div className="venue-name">
                                    <h3>{room.name}</h3>
                                  </div>
                                  <div className="mb-room-name my-1">
                                    <h4>
                                      {formatDate(
                                        room?.dataResponseSchedules?.[0]
                                          ?.startAt,
                                      )}
                                    </h4>
                                  </div>
                                  <ul className="mb-tab-showtime">
                                    <li
                                      className="item cursor-pointer"
                                      onClick={() =>
                                        handleBookingMovie(room.id)
                                      }
                                    >
                                      <a>
                                        <span>
                                          {convertTo24HourFormat(
                                            room?.dataResponseSchedules?.[0]
                                              ?.startAt,
                                          )}
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </dd>
                  </dl>
                </div>
              </dd>
            </dl>
          ) : (
            <h2 className="none-list-movie-title">
              Bộ phim hiện chưa có suất chiếu nào !
            </h2>
          )}
          <input type="hidden" name="movie_id" defaultValue={4212} />
        </div>
        <div
          className="mb-close"
          style={{ display: "flex" }}
          onClick={() => setShowOption(false)}
        >
          x
        </div>
        <div className="mb-spinner" style={{ display: "none" }}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}

export default MoviePopup
