import { useEffect, useState } from "react"
import Dropdown from "../../components/Dropdown"
import Layout from "../../components/Layout/Layout"
import LineMovie from "../../components/LineMovie"
import "./Movies.scss"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  getAllMovie,
  getMovieTypes,
  movieReducer,
} from "../../redux/slice/Movie/Movie"
import MovieItem from "../../components/MovieItem/MovieItem"
import MoviePopup from "../../components/MoviePopup"
import HeroImg from "../../components/HeroImg/HeroImg"
import { useNavigate } from "react-router-dom"

type Props = {}

const Movies = (props: Props) => {
  const initial = {
    pageNumber: 1,
    pageSize: 10,
  }

  const [isBookingPopup, setIsBookingPopup] = useState(false)
  const { listMovie, listMovieTypes } = useAppSelector(movieReducer)
  const [movieId, setMovieId] = useState("")
  const [form, setForm] = useState<any>({
    maritalStatus: "",
  })
  const dispatch = useAppDispatch()

  const handleValueChange = (option: any) => {
    setForm({ ...form, maritalStatus: option })
  }
  const navigate = useNavigate()

  const handleBookingPopup = (id: string) => {
    const isLoggedIn = !!localStorage.getItem("accessToken")
    if (isLoggedIn) {
      setMovieId(id)
      setIsBookingPopup(!isBookingPopup)
    } else {
      navigate("/login")
    }
  }
  useEffect(() => {
    dispatch(getAllMovie(initial))
    dispatch(getMovieTypes({}))
  }, [])
  console.log(listMovieTypes)
  return (
    <div className="movie-category">
      <HeroImg
        backgroundImageUrl={
          "https://png.pngtree.com/background/20230618/original/pngtree-blank-movie-ticket-with-popcorn-bucket-filmstrip-clapperboard-and-camera-in-picture-image_3709549.jpg"
        }
        onlyBackground
        description="Danh Sách Phim"
      />
      <LineMovie />
      <Layout>
        <div className="booking-movie-search">
          <div className="row gy-4">
            <div className="col-md-12 col-lg-8"></div>
            <div className="col-md-12 col-lg-4">
              <Dropdown
                options={listMovieTypes}
                setValueChosen={handleValueChange}
                valueChosen={form.maritalStatus}
                value="id"
                label="movieTypeName"
                title={"Category"}
              />
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {listMovie.map((item: any) => (
            <div className="col-md-12 col-lg-3">
              <MovieItem
                handleMovieBooking={handleBookingPopup}
                title={item.name}
                movieType={item.movieTypeName}
                image={item.image}
                duration={item.director}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </Layout>
      {isBookingPopup && (
        <MoviePopup idMovie={movieId} setShowOption={setIsBookingPopup} />
      )}
    </div>
  )
}

export default Movies
