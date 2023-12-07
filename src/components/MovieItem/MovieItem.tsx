import { Link } from "react-router-dom"
import "./MovieItem.scss"
interface MovieItemProps {
  handleMovieBooking?: any
}
const MovieItem = ({ handleMovieBooking }: MovieItemProps) => {
  return (
    <div className="mb-movie-item item-template1">
      <a title="The Fifth Day">
        <div className="movie-image">
          <img
            decoding="async"
            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg"
            alt="The Fifth Day"
          />
        </div>
      </a>

      <div className="movie-info">
        <div className="categories-and-time">
          <div className="movie-category">
            <a
              href="https://demo.ovatheme.com/aovis/movie_cat/comedy/"
              title="Comedy"
            >
              Comedy
            </a>{" "}
          </div>

          <div className="separator">/</div>

          <span className="running-time">180 Mins</span>
        </div>

        <Link to={"/movie"}>
          <h3 className="movie-title">The Fifth Day </h3>
        </Link>

        <button
          className="btn btn-booking"
          data-movie-id="4311"
          onClick={() => handleMovieBooking()}
        >
          Get Ticket{" "}
        </button>
      </div>
    </div>
  )
}

export default MovieItem
