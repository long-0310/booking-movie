import React from "react"
import TicketChooseSeats from "../../components/TicketChooseSeat/TicketChooseSeat"
import "./BookingMovie.scss"
import HeroImg from "../../components/HeroImg/HeroImg"
import LineMovie from "../../components/LineMovie"
import Layout from "../../components/Layout/Layout"

type Props = {}

const Booking = (props: Props) => {
  return (
    <div className="booking-movie">
      <HeroImg />
      <LineMovie />
      <Layout>
        <div className="row">
          <div className="col-lg-8">
            <TicketChooseSeats />
          </div>
          <div className="col-lg-4">
            <div className="cart-sidebar">
              <div className="cart-info">
                <div className="wp-cart-info">
                  <h3 className="cart_title">
                    <span className="title">Booking Information</span>
                  </h3>
                  <div className="content-cart-info">
                    <span className="placeholder" style={{ display: "none" }}>
                      Please Select Your Seat
                    </span>
                    <div
                      className="item-info item-header"
                      style={{ display: "flex" }}
                    >
                      <span>Seat</span>
                      <span>Price</span>
                    </div>
                    <div className="wp-content-item" style={{}}>
                      <div
                        className="item-info item-info-map"
                        data-qty={4}
                        data-price={160}
                        style={{ display: "flex" }}
                      >
                        <div className="info-type-ticket">
                          <div className="wp-seat-info">
                            <span className="seat-0">F16</span>
                            <span className="seat-1">H20</span>
                            <span className="seat-2">E10</span>
                            <span className="seat-3">H12</span>
                          </div>
                        </div>
                        <div className="info-sub-price">$160.00</div>
                      </div>
                    </div>
                    <div
                      className="cart-fee total-discount"
                      style={{ display: "none" }}
                    >
                      <p className="text">Discount</p>
                      <p
                        className="discount-number"
                        data-discount={0}
                        data-discount-code=""
                        data-discount-value=""
                        data-discount-type=""
                      />
                    </div>
                    <div
                      className="cart-fee total-tax"
                      style={{ display: "none" }}
                    >
                      <p className="text">Tax</p>
                      <p className="tax-number" data-tax={0}>
                        +$0.00
                      </p>
                    </div>
                    <div
                      className="cart-fee ticket-fee"
                      style={{ display: "none" }}
                    >
                      <p className="text">Ticket Fee</p>
                      <p className="ticket-fee-number" data-ticket-fee={0}>
                        +$0.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="total-cart-info" data-total={160}>
                  <span className="text">Total</span>
                  <span className="total-price">$160.00</span>
                </div>
              </div>
              <div className="cart-discount">
                <a className="cart-discount-btn" href="javascript:void(0)">
                  Enter Discount Code
                </a>
                <div className="form-discount" style={{ display: "none" }}>
                  <div className="input-discount-code">
                    <input
                      type="text"
                      className="discount-code"
                      placeholder="DISCOUNT CODE"
                    />
                    <i
                      className="dashicons-before dashicons-update-alt"
                      style={{ display: "none" }}
                    />
                  </div>
                  <button
                    data-movie-id={1024}
                    className="cart-discount-submit-code"
                  >
                    Apply{" "}
                  </button>
                  <i className="fas fa-times" id="cart-discount-close" />
                  <p className="error" style={{ display: "none" }}>
                    Invalid Discount Code
                  </p>
                </div>
              </div>
              <div className="cart-checkout" id="mb-btn-checkout">
                <div className="submit-load-more">
                  <div className="load-more">
                    <div className="lds-spinner">
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
                <input
                  type="hidden"
                  name="mb_checkout_nonce"
                  id="mb_checkout_nonce"
                  defaultValue="64de3aba06"
                />
                <input
                  type="hidden"
                  name="login-required"
                  defaultValue="https://demo.ovatheme.com/aovis/ "
                />
                <a id="btn-checkout" href="javascript:void(0)">
                  Proceed to checkout{" "}
                </a>
              </div>
              <span className="cart-error" style={{ display: "none" }}>
                Please select seat
              </span>
              <div className="message-error">
                <a />
              </div>{" "}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Booking
