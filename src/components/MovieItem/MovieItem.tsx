import { Link } from "react-router-dom"
import "./MovieItem.scss"
interface MovieItemProps {
  handleMovieBooking?: any
  title: string
  movieType: string
  duration: string
  image: string
  id: string
}

const MovieItem = ({
  handleMovieBooking,
  title,
  movieType,
  duration,
  image,
  id,
}: MovieItemProps) => {
  return (
    <div className="mb-movie-item item-template1">
      <a title={title}>
        <div className="movie-image">
          <img decoding="async" src={image} alt={title} />
        </div>
      </a>

      <div className="movie-info">
        <div className="categories-and-time">
          <div className="movie-category">
            <a title={movieType}>{movieType}</a>{" "}
          </div>

          <div className="separator">/</div>

          <span className="running-time">{duration}</span>
        </div>

        <Link to={`/movie/${id}`}>
          <h3 className="movie-title">{title} </h3>
        </Link>

        <button
          className="btn btn-booking"
          data-movie-id="4311"
          onClick={() => handleMovieBooking(id)}
        >
          Mua vé
        </button>
      </div>
    </div>
  )
}

export default MovieItem
