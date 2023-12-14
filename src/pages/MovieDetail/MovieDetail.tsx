import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { formatDate } from "../../common/untils"
import Button from "../../components/Button"
import HeroImg from "../../components/HeroImg/HeroImg"
import LineMovie from "../../components/LineMovie"
import MovieItem from "../../components/MovieItem/MovieItem"
import MovieTrailerPopup from "../../components/MovieTrailerPopup"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  getAllMovie,
  getDetailMovie,
  movieReducer,
} from "../../redux/slice/Movie/Movie"
import "./MovieDetail.scss"
import MoviePopup from "../../components/MoviePopup"

type Props = {}

const MovieDetail = (props: Props) => {
  const initial = {
    pageNumber: 1,
    pageSize: 10,
  }
  const params = useParams()
  const dispatch = useAppDispatch()
  const [isBookingPopup, setIsBookingPopup] = useState(false)
  const [isMovieTrailer, setMovieTrailer] = useState(false)
  const [movieId, setMovieId] = useState("")
  const navigate = useNavigate()
  const { movieDetail, listMovie } = useAppSelector(movieReducer)
  const handleBookingPopup = (movieDetail: any) => {
    const isLoggedIn = !!localStorage.getItem("accessToken")
    if (isLoggedIn) {
      setIsBookingPopup(!isBookingPopup)
      setMovieId(movieDetail.id)
    } else {
      navigate("/login")
    }
  }

  const handleBookingPopupMovie = (id: any) => {
    setIsBookingPopup(!isBookingPopup)
    setMovieId(id)
  }

  const handleOpenTrailer = () => {
    setMovieTrailer(!isMovieTrailer)
  }

  useEffect(() => {
    dispatch(getDetailMovie({ movieId: params.id }))
    dispatch(getAllMovie(initial))
  }, [params.id])

  return (
    <div className="movie-detail">
      <HeroImg
        backgroundImageUrl={movieDetail.heroImage}
        title={movieDetail.name}
        time={formatDate(movieDetail.premiereDate)}
        director={movieDetail.director}
      />
      <LineMovie />
      <div className="ova_movie_single">
        <div className="top-content">
          <div className="movie-heading">
            <h1 className="movie-title">{movieDetail.name}</h1>
            <div className="categories-and-time">
              <div className="movie-category">
                <a title="Thriller">{movieDetail.movieTypeName}</a>{" "}
              </div>
              <div className="separator">/</div>
              <span className="running-time">
                {movieDetail.movieDuration} phút
              </span>
            </div>
          </div>
          <button className="btn btn-booking" data-movie-id={842}>
            <Button
              label="Đặt vé"
              onClick={() => handleBookingPopup(movieDetail)}
            />
          </button>
        </div>
        <div className="movie-media has-trailer">
          {/* Featured image */}
          <div className="movie-featured-image">
            <p
              className="gallery-fancybox"
              data-fancybox="movie-gallery-fancybox"
              data-caption={movieDetail.name}
            >
              <img src={movieDetail.image} alt={movieDetail.name} />
            </p>

            <div
              className="btn-trailer-video-wrapper"
              onClick={handleOpenTrailer}
            >
              <div
                className="btn-video btn-trailer-video"
                data-src="https://vimeo.com/252443587"
                data-movie-id={842}
              >
                <i aria-hidden="true" className="fas fa-play" />
              </div>
            </div>
            <span className="text-trailer">
              Xem Trailer
              <i
                aria-hidden="true"
                className="ovaicon ovaicon-diagonal-arrow"
              />
            </span>
          </div>{" "}
        </div>
        <ul className="info-list">
          <li className="item item-0">
            <h4 className="title">Đạo diễn:</h4>
            <span className="value">{movieDetail.director}</span>
          </li>
          <li className="item item-1">
            <h4 className="title">Thời lượng:</h4>
            <span className="value">{movieDetail.movieDuration} phút</span>
          </li>
          <li className="item item-2">
            <h4 className="title">Ngày công chiếu:</h4>
            <span className="value">
              {formatDate(movieDetail.premiereDate)}
            </span>
          </li>
        </ul>

        <div className="main-content">
          <h2 className="movie-title-h2 story-title">Nội dung phim</h2>
          <p>{movieDetail.description}</p>
        </div>
        <div className="movie-related">
          <h2 className="movie-title-h2 related-title">Có thể bạn sẽ thích</h2>
          <div className="row">
            {listMovie.slice(0, 4).map((item: any) => (
              <div className="col-md-12 col-lg-3">
                <MovieItem
                  handleMovieBooking={handleBookingPopupMovie}
                  title={item.name}
                  movieType={item.movieTypeName}
                  image={item.image}
                  duration={item.director}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isBookingPopup && (
        <MoviePopup idMovie={movieId} setShowOption={setIsBookingPopup} />
      )}
      {isMovieTrailer && (
        <MovieTrailerPopup
          trailerUrl={movieDetail.trailer}
          setShowOption={setMovieTrailer}
        />
      )}
    </div>
  )
}

export default MovieDetail
