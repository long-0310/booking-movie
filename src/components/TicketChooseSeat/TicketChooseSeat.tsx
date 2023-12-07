import React, { useEffect, FC, useState } from "react"
import { useDispatch } from "react-redux"
import Screen from "../../assets/images/screen.png"
import "./TicketChooSeat.scss"
// import { clearSeats, getSeats } from "../../ticketRoomSlice"

interface Seat {
  maGhe: string
  loaiGhe: string
  daDat: boolean
}

interface TicketChooseSeatsProps {
  seats?: Seat[]
}

const TicketChooseSeats: FC<TicketChooseSeatsProps> = ({ seats }) => {
  const dispatch = useDispatch()
  const [fakeData, setFakeData] = useState([
    {
      maGhe: "G01",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G02",
      loaiGhe: "Normal",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G03",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G04",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G05",
      loaiGhe: "Vip",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G06",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G07",
      loaiGhe: "Vip",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G08",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G09",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G10",
      loaiGhe: "Normal",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G11",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G12",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G13",
      loaiGhe: "Vip",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G14",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G15",
      loaiGhe: "Vip",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G16",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G17",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G18",
      loaiGhe: "Normal",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G19",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G20",
      loaiGhe: "Normal",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G21",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G22",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G23",
      loaiGhe: "Vip",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G24",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G25",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G26",
      loaiGhe: "Normal",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G27",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G28",
      loaiGhe: "Normal",
      daDat: true,
      isChoise: false,
    },
    {
      maGhe: "G29",
      loaiGhe: "Vip",
      daDat: false,
      isChoise: false,
    },
    {
      maGhe: "G30",
      loaiGhe: "Normal",
      daDat: false,
      isChoise: false,
    },
  ])

  // useEffect(() => {
  //   const action = clearSeats({
  //     bookingSeat: [],
  //     totalPrice: 0,
  //     totalPriceSeat: 0,
  //     totalPriceCombo: 0,
  //   })
  //   dispatch(action)
  // }, [seats])

  const handleChooseSeat = (selectedSeat: any) => {
    if (!selectedSeat.daDat) {
      setFakeData((prevData) =>
        prevData.map((seat) => {
          if (seat.maGhe === selectedSeat.maGhe) {
            return { ...seat, isChoise: !seat.isChoise }
          }
          return seat
        }),
      )
    }
  }

  return (
    <div className="bookingSeat">
      <div className="bookTicketMovie--screen">
        <img src={Screen} alt="" />
      </div>
      <div className="bookTicketMovie--seats row">
        {(fakeData || []).map((seat, index) => (
          <div
            key={seat.maGhe}
            className={`bookTicketMovie--seat col-md-1 col-lg-1 ${
              seat.loaiGhe === "Vip" ? "vip" : ""
            } ${seat.daDat ? "sold" : ""} ${seat.isChoise ? "is-choice" : ""}`}
            onClick={() => handleChooseSeat(seat)}
          >
            <i className="fas fa-couch" />
          </div>
        ))}
      </div>
      <div className="bookTicketMovie--tutorials row">
        <div className="bookTicketMovie--tutorial bookTicketMovie--tutorial-normal col-md-3 col-lg-3">
          <i className="fas fa-couch" />
          <div className="bookTicketMovie--tutorial__text">Ghế Trống</div>
        </div>
        <div className="bookTicketMovie--tutorial bookTicketMovie--tutorial-vip col-md-3 col-lg-3">
          <i className="fas fa-couch" />
          <div className="bookTicketMovie--tutorial__text">Ghế Vip</div>
        </div>
        <div className="bookTicketMovie--tutorial bookTicketMovie--tutorial-active col-md-3 col-lg-3">
          <i className="fas fa-couch" />
          <div className="bookTicketMovie--tutorial__text">Ghế Đang Chọn</div>
        </div>
        <div className="bookTicketMovie--tutorial bookTicketMovie--tutorial-sold col-md-3 col-lg-3">
          <i className="fas fa-couch" />
          <div className="bookTicketMovie--tutorial__text">
            Ghế Có Người Chọn
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketChooseSeats
