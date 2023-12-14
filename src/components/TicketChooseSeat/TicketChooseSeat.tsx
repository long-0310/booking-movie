import React, { useEffect, FC, useState } from "react"
import { useDispatch } from "react-redux"
import Screen from "../../assets/images/screen.png"
import "./TicketChooSeat.scss"
// import { clearSeats, getSeats } from "../../ticketRoomSlice"

const TicketChooseSeats = ({
  listSeatByRoom,
  setListChoose,
  listChoose,
}: any) => {
  const [listSeat, setListSeat] = useState([])
  // const [listChoose, setListChoose] = useState<any>({})
  // const [listChoose, setListChoose] = useState<any>([])

  // const handleChooseSeat = (selectedSeat: any) => {
  //   if (listChoose && listChoose?.id === selectedSeat.id) {
  //     setListChoose(null)
  //     const updatedData = listSeat.map((item: any) => {
  //       if (item.line !== selectedSeat.line) return item

  //       const updatedListSeat = item.listSeat.map((seat: any) =>
  //         seat.id === selectedSeat.id
  //           ? {
  //               ...seat,
  //               seatStatusName:
  //                 seat.seatStatusName.toUpperCase() === "CÒN TRỐNG"
  //                   ? "Đã Chọn"
  //                   : "CÒN TRỐNG",
  //             }
  //           : seat,
  //       )

  //       return {
  //         ...item,
  //         listSeat: updatedListSeat,
  //       }
  //     }) as any
  //     setListSeat(updatedData)
  //   } else {
  //     setListChoose(selectedSeat)
  //     const deselectedData = listSeat.map((item: any) => ({
  //       ...item,
  //       listSeat: item.listSeat.map((seat: any) => ({
  //         ...seat,
  //         seatStatusName: "CÒN TRỐNG",
  //       })),
  //     })) as any

  //     const updatedData = deselectedData.map((item: any) => {
  //       if (item.line !== selectedSeat.line) return item

  //       const updatedListSeat = item.listSeat.map((seat: any) =>
  //         seat.id === selectedSeat.id
  //           ? {
  //               ...seat,
  //               seatStatusName:
  //                 seat.seatStatusName.toUpperCase() === "CÒN TRỐNG"
  //                   ? "Đã Chọn"
  //                   : "CÒN TRỐNG",
  //             }
  //           : seat,
  //       )

  //       return {
  //         ...item,
  //         listSeat: updatedListSeat,
  //       }
  //     }) as any

  //     setListSeat(updatedData)
  //   }
  // }

  const handleChooseSeat = (selectedSeat: any) => {
    const isExist = listChoose.some((item: any) => item.id === selectedSeat.id)
    if (isExist) {
      setListChoose(
        listChoose.filter((item: any) => item.id !== selectedSeat.id),
      )
    } else {
      setListChoose([...listChoose, selectedSeat])
    }

    const newData = listSeat.map((item: any) => {
      if (item.line !== selectedSeat.line) return item

      const updatedListSeat = item.listSeat.map((seat: any) =>
        seat.id === selectedSeat.id
          ? {
              ...seat,
              seatStatusName:
                seat.seatStatusName.toUpperCase() === "CÒN TRỐNG"
                  ? "Đã Chọn"
                  : "CÒN TRỐNG",
            }
          : seat,
      )

      return {
        ...item,
        listSeat: updatedListSeat,
      }
    }) as any
    setListSeat(newData)
  }

  useEffect(() => {
    if (listSeatByRoom) {
      const newData = listSeatByRoom.reduce((acc: any, item: any) => {
        const lineSeat = acc.find((seat: any) => seat.line === item.line)
        if (lineSeat) {
          lineSeat.listSeat.push(item)
        } else {
          acc.push({ line: item.line, listSeat: [item] })
        }
        return acc
      }, [])

      setListSeat(newData)
    }
  }, [listSeatByRoom])

  return (
    <div className="bookingSeat">
      <div className="bookTicketMovie--screen">
        <img src={Screen} alt="" />
      </div>
      <div className="bookTicketMovie--box">
        {listSeat.map((line: any) => (
          <div className="bookTicketMovie--seats row">
            {line?.listSeat?.map((seat: any, idx: number) => (
              <div
                key={idx}
                className={`bookTicketMovie--seat col-md-1 col-lg-1   ${
                  seat.seatStatusName === "Đã Chọn" ? "is-choice" : ""
                }`}
                onClick={() => handleChooseSeat(seat)}
              >
                <i className="fas fa-couch" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="bookTicketMovie--tutorials row">
        <div className="bookTicketMovie--tutorial bookTicketMovie--tutorial-normal col-md-3 col-lg-3">
          <i className="fas fa-couch" />
          <div className="bookTicketMovie--tutorial__text">Ghế Trống</div>
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
