import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { formatDate } from "../../common/untils"
import HeroImg from "../../components/HeroImg/HeroImg"
import Layout from "../../components/Layout/Layout"
import LineMovie from "../../components/LineMovie"
import TicketChooseSeats from "../../components/TicketChooseSeat/TicketChooseSeat"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  GetSchedulesByMovie,
  cinemaReducer,
  getSeatByRoom,
} from "../../redux/slice/Cinema/Cinema"
import {
  createTicket,
  getDetailMovie,
  movieReducer,
  resetLinkPayment,
} from "../../redux/slice/Movie/Movie"
import "./BookingMovie.scss"
import Loading from "../../components/Loading"
import PaymentPopup from "../../components/PaymentPopup"
import Modal from "../../components/Modal"

type Props = {}

const Booking = (props: Props) => {
  const { state } = useLocation()
  const params = useParams()
  const dispatch = useAppDispatch()
  const { movieDetail, loadingPayment, linkPayment } =
    useAppSelector(movieReducer)
  const { listRoomInformation } = useAppSelector(cinemaReducer)
  const { listSeatByRoom } = useAppSelector(cinemaReducer)
  const [detailRoom, setDetailRoom] = useState<any>({})
  const [listChoose, setListChoose] = useState<any>([])
  const [isOpenUp, setOpenPopup] = useState<any>(true)
  const [isClosePopup, setClosePopup] = useState<any>(true)

  const handlePayment = () => {
    if (listChoose.length === 0) {
      toast.error("Vui lòng cho ghế !")
    } else {
      const listTransform = listChoose.map((item: any) => ({ seatId: item.id }))
      const data = {
        id: detailRoom.id,
        body: listTransform,
      }

      dispatch(createTicket(data))
    }
  }

  const handlePaymentPopup = () => {
    setClosePopup(!isClosePopup)
    dispatch(resetLinkPayment({}))
  }

  useEffect(() => {
    dispatch(getDetailMovie({ movieId: state }))
    dispatch(getSeatByRoom({ roomId: params.id }))
    dispatch(GetSchedulesByMovie({ movieId: state }))
  }, [state, params])

  useEffect(() => {
    if (listRoomInformation) {
      const data = listRoomInformation.find((item: any) =>
        item.roomName.includes(params.id?.toString()),
      )
      setDetailRoom(data)
    }
  }, [listRoomInformation, params.id, state])

  return (
    <div className="booking-movie">
      <HeroImg
        backgroundImageUrl={movieDetail.heroImage}
        title={movieDetail.name}
        time={formatDate(movieDetail.premiereDate)}
        director={movieDetail.director}
      />

      <LineMovie />
      <Layout>
        <div className="row">
          <div className="col-lg-8 mb-5">
            <TicketChooseSeats
              listChoose={listChoose}
              setListChoose={setListChoose}
              listSeatByRoom={listSeatByRoom}
            />
          </div>
          <div className="col-lg-4">
            <div className="cart-sidebar">
              <div className="cart-info">
                <div className="wp-cart-info">
                  <h3 className="cart_title">
                    <span className="title">THÔNG TIN ĐẶT VÉ</span>
                  </h3>
                  <div className="content-cart-info">
                    <div
                      className="item-info item-header"
                      style={{ display: "flex" }}
                    >
                      <span>Số ghế</span>
                      <span>Giá</span>
                    </div>
                    <div className="wp-content-item" style={{}}>
                      <div
                        className="item-info item-info-map mb-2"
                        data-qty={4}
                        data-price={160}
                        style={{ display: "flex" }}
                      >
                        {listChoose !== null &&
                        Object.keys(listChoose).length !== 0 ? (
                          <>
                            <div className="info-type-ticket ">
                              <div className="wp-seat-info">
                                <span className="seat-0">
                                  {listChoose?.map((seat: any, idx: number) => (
                                    <>
                                      {seat.line}
                                      {seat.number}
                                      {idx !== listChoose.length - 1
                                        ? " | "
                                        : ""}
                                    </>
                                  ))}
                                </span>
                              </div>
                            </div>
                            <div className="info-sub-price">
                              {(
                                detailRoom?.price * listChoose.length
                              ).toLocaleString("de-DE")}{" "}
                              VNĐ
                            </div>
                          </>
                        ) : (
                          <div>Hiện chưa có ghế nào được chọn</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="total-cart-info" data-total={160}>
                  <span className="text">Tổng</span>
                  <span className="total-price">
                    {listChoose !== null &&
                      Object.keys(listChoose).length !== 0 &&
                      `${(detailRoom?.price * listChoose.length).toLocaleString(
                        "de-DE",
                      )} VNĐ`}
                  </span>
                </div>
              </div>
              <div className="cart-checkout" id="mb-btn-checkout">
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
                <div id="btn-checkout" onClick={handlePayment}>
                  Tiếp tục thanh toán
                </div>
              </div>
              <div className="message-error">
                <a />
              </div>{" "}
            </div>
          </div>
        </div>
        {loadingPayment && <Loading fullPage />}
      </Layout>
      {!loadingPayment && linkPayment.length > 0 && (
        <PaymentPopup setShowOption={handlePaymentPopup} link={linkPayment} />
      )}
    </div>
  )
}

export default Booking
