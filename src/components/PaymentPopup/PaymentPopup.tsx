import React, { useRef } from "react"
import Button from "../Button"
import "./PaymentPopup.scss"
import { Link } from "react-router-dom"

const PaymentPopup = ({ setShowOption, link }: any) => {
  const ref = useRef<HTMLDivElement>()

  return (
    <div className="payment-popup">
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
            <div className="none-list-movie-title">
              <h2>Vui lòng click vào đường link sau để thanh toán :</h2>
              <div className="btn-link-payment">
                <Link to={link} target="_blank">
                  <Button label="Click để thanh toán" />
                </Link>
              </div>
              <img
                className="logo-payment"
                src="https://lh7-us.googleusercontent.com/1i3zTORATJnXDCLw37rHhvjMP3SJHLKr1wvFsG1yL2-eZBvG_3hIf0GTVyLD6tzqTQZExFSti2VkuiW-nZfzk4vLgmcI_FiuboSLFrN-bQdZGvVd0xI-BMpXrCT092ISQped4oGPxdcaZXmFAoUX3bQ"
                alt=""
              />
            </div>
            <input type="hidden" name="movie_id" />
          </div>
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

export default PaymentPopup
