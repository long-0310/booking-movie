import React, { useRef } from "react"
import "./MoviePopup.scss"
import useClickOutside from "../../hook/useClickOutside"

interface MoviePopupI {
  setShowOption: React.Dispatch<React.SetStateAction<boolean>>
}

const MoviePopup = ({ setShowOption }: MoviePopupI) => {
  const ref = useRef<HTMLDivElement>()

  useClickOutside(ref, () => {
    setShowOption(false)
  })

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
          {" "}
          <ul className="toggle-tabs mb-date-tabs">
            <li className="current">
              <div className="day" data-date={1772668800}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Thu</span>
                </span>
                <span className="d_day">
                  <strong>05</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1772755200}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Fri</span>
                </span>
                <span className="d_day">
                  <strong>06</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1772841600}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Sat</span>
                </span>
                <span className="d_day">
                  <strong>07</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1772928000}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Sun</span>
                </span>
                <span className="d_day">
                  <strong>08</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773014400}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Mon</span>
                </span>
                <span className="d_day">
                  <strong>09</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773100800}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Tue</span>
                </span>
                <span className="d_day">
                  <strong>10</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773187200}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Wed</span>
                </span>
                <span className="d_day">
                  <strong>11</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773273600}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Thu</span>
                </span>
                <span className="d_day">
                  <strong>12</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773360000}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Fri</span>
                </span>
                <span className="d_day">
                  <strong>13</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773446400}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Sat</span>
                </span>
                <span className="d_day">
                  <strong>14</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773532800}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Sun</span>
                </span>
                <span className="d_day">
                  <strong>15</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773619200}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Mon</span>
                </span>
                <span className="d_day">
                  <strong>16</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773705600}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Tue</span>
                </span>
                <span className="d_day">
                  <strong>17</strong>
                </span>
              </div>
            </li>
            <li className="">
              <div className="day" data-date={1773792000}>
                <span className="D_m_day">
                  <span className="m_day">03</span>
                  <span className="D_day">Wed</span>
                </span>
                <span className="d_day">
                  <strong>18</strong>
                </span>
              </div>
            </li>
          </ul>
          <dl className="collateral-tabs">
            <dt className="tab current" data-date={1772668800}>
              05-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container current">
              <div className="tab-content mb-showtimes">
                <div className="mb-tabs-cities">
                  <ul className="toggle-tabs">
                    <li className="mb-city-name current">
                      <span>California</span>
                    </li>
                    <li className="mb-city-name">
                      <span>New York</span>
                    </li>
                  </ul>
                </div>
                <dl className="collateral-tabs">
                  <dt className="tab current">California </dt>
                  <dd className="tab-container current">
                    <div className="tab-content mb-room-types">
                      <ul className="toggle-tabs">
                        <li className="mb-room-type-name current">3D </li>
                        <li className="mb-room-type-name">2D </li>
                      </ul>
                      <dl className="collateral-tabs">
                        <dt className="tab current">3D </dt>
                        <dd className="tab-container current">
                          <div className="tab-content showtimes">
                            <div className="mb-venue">
                              <div className="venue-name">
                                <h3>San Francisco</h3>
                              </div>
                              <div className="mb-room-name">
                                <h4>IMAX</h4>
                              </div>
                              <ul className="mb-tab-showtime">
                                <li className="item">
                                  <a>
                                    <span>7:30 am</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mb-venue">
                              <div className="venue-name">
                                <h3>Los Angeles</h3>
                              </div>
                              <div className="mb-room-name">
                                <h4>IMAX</h4>
                              </div>
                              <ul className="mb-tab-showtime">
                                <li className="item">
                                  <a>
                                    <span>8:30 am</span>
                                  </a>
                                </li>
                                <li className="item">
                                  <a>
                                    <span>2:30 pm</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mb-venue">
                              <div className="venue-name">
                                <h3>San Jose</h3>
                              </div>
                              <div className="mb-room-name">
                                <h4>IMAX</h4>
                              </div>
                              <ul className="mb-tab-showtime">
                                <li className="item">
                                  <a>
                                    <span>10:30 am</span>
                                  </a>
                                </li>
                                <li className="item">
                                  <a>
                                    <span>11:30 am</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </dd>
                        <dt className="tab">2D </dt>
                        <dd className="tab-container">
                          <div className="tab-content showtimes">
                            <div className="mb-venue">
                              <div className="venue-name">
                                <h3>San Francisco</h3>
                              </div>
                              <div className="mb-room-name">
                                <h4>ScreenX</h4>
                              </div>
                              <ul className="mb-tab-showtime">
                                <li className="item">
                                  <a>
                                    <span>7:30 am</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mb-venue">
                              <div className="venue-name">
                                <h3>Los Angeles</h3>
                              </div>
                              <div className="mb-room-name">
                                <h4>ScreenX</h4>
                              </div>
                              <ul className="mb-tab-showtime">
                                <li className="item">
                                  <a>
                                    <span>8:30 am</span>
                                  </a>
                                </li>
                                <li className="item">
                                  <a>
                                    <span>2:30 pm</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mb-venue">
                              <div className="venue-name">
                                <h3>San Jose</h3>
                              </div>
                              <div className="mb-room-name">
                                <h4>ScreenX</h4>
                              </div>
                              <ul className="mb-tab-showtime">
                                <li className="item">
                                  <a>
                                    <span>10:30 am</span>
                                  </a>
                                </li>
                                <li className="item">
                                  <a>
                                    <span>11:30 am</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </dd>
                </dl>
              </div>
            </dd>
            <dt className="tab" data-date={1772755200}>
              06-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1772841600}>
              07-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1772928000}>
              08-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773014400}>
              09-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773100800}>
              10-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773187200}>
              11-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773273600}>
              12-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773360000}>
              13-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773446400}>
              14-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773532800}>
              15-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773619200}>
              16-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773705600}>
              17-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
            <dt className="tab" data-date={1773792000}>
              18-03-2026 12:00 am{" "}
            </dt>
            <dd className="tab-container">
              <div className="tab-content mb-showtimes" />
            </dd>
          </dl>
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
