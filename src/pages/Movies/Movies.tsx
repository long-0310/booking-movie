import { useState } from "react"
import Dropdown from "../../components/Dropdown"
import HeroImg from "../../components/HeroImg/HeroImg"
import Layout from "../../components/Layout/Layout"
import LineMovie from "../../components/LineMovie"
import MovieItem from "../../components/MovieItem/MovieItem"
import "./Movies.scss"
import MoviePopup from "../../components/MoviePopup"

type Props = {}

const Movies = (props: Props) => {
  const options = [
    { id: 1, name: "Horror" },
    { id: 2, name: "Action" },
    { id: 3, name: "Thriller" },
    { id: 4, name: "Crime film" },
    { id: 5, name: "Television" },
    { id: 6, name: "War" },
    { id: 7, name: "Art" },
  ]
  const [isBookingPopup, setIsBookingPopup] = useState(false)
  const [form, setForm] = useState<any>({
    maritalStatus: "",
  })
  const handleValueChange = (option: any) => {
    setForm({ ...form, maritalStatus: option })
  }

  const handleBookingPopup = () => {
    setIsBookingPopup(!isBookingPopup)
  }
  return (
    <div className="movie-category">
      <HeroImg />
      <LineMovie />
      <Layout>
        <div className="booking-movie-search">
          <div className="row gy-4">
            <div className="col-md-12 col-lg-8"></div>
            <div className="col-md-12 col-lg-4">
              <Dropdown
                options={options}
                setValueChosen={handleValueChange}
                valueChosen={form.maritalStatus}
                value="id"
                label="name"
                title={"Category"}
              />
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
            (item) => (
              <div className="col-md-12 col-lg-3">
                <MovieItem handleMovieBooking={handleBookingPopup} />
              </div>
            ),
          )}
        </div>
      </Layout>
      {isBookingPopup && <MoviePopup setShowOption={setIsBookingPopup} />}
    </div>
  )
}

export default Movies
