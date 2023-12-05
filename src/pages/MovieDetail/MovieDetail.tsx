import Button from "../../components/Button"
import LineMovie from "../../components/LineMovie"
import MovieItem from "../../components/MovieItem/MovieItem"
import "./MovieDetail.scss"

type Props = {}

const MovieDetail = (props: Props) => {
  return (
    <div className="movie-detail">
      <div className="movie-detail-hero">
        <div className="movie-detail-background-overlay"></div>
        <div className="movie-detail-container">
          <div className="cover_color"></div>
          <div className="header_banner_el">
            <h1 className=" header_title">Wrong Turns Part 2 </h1>
            <span>John Doe - 12 Thursday</span>
          </div>
        </div>
      </div>
      <LineMovie />
      <div className="ova_movie_single">
        <div className="top-content">
          <div className="movie-heading">
            <h1 className="movie-title">Wrong Turns Part 2</h1>
            <div className="categories-and-time">
              <div className="movie-category">
                <a title="Thriller">Thriller</a>{" "}
              </div>
              <div className="separator">/</div>
              <span className="running-time">180 Mins</span>
            </div>
          </div>
          <button className="btn btn-booking" data-movie-id={842}>
            <Button label="Booking" />
          </button>
        </div>
        <div className="movie-media has-trailer">
          <div className="movie-gallery gallery_blur">
            <a
              className="gallery-fancybox"
              data-fancybox="movie-gallery-fancybox"
              data-caption="Movie Gallery"
            >
              <img
                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/sub-movie-image-01.jpg"
                alt="Movie Gallery"
                title="Movie Gallery"
              />
              <div className="blur-bg"></div>
            </a>
          </div>
          <div className="movie-gallery gallery_hidden">
            <a
              className="gallery-fancybox"
              data-src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/sub-movie-image-02.jpg"
              data-fancybox="movie-gallery-fancybox"
              data-caption="Movie Gallery"
            >
              <img
                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/sub-movie-image-02.jpg"
                alt="Movie Gallery"
                title="Movie Gallery"
              />
            </a>
          </div>
          {/* Featured image */}
          <div className="movie-featured-image">
            <a
              className="gallery-fancybox"
              data-src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/movie-image-01.jpg"
              data-fancybox="movie-gallery-fancybox"
              data-caption="Wrong Turns Part 2"
            >
              <img
                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/movie-image-01.jpg"
                alt="Wrong Turns Part 2"
              />
            </a>
            {/* Button Watch trailer video in single */}
            <div className="btn-trailer-video-wrapper">
              <div
                className="btn-video btn-trailer-video"
                data-src="https://vimeo.com/252443587"
                data-movie-id={842}
              >
                <i aria-hidden="true" className="fas fa-play" />
              </div>
            </div>
            <span className="text-trailer">
              Watch the Trailer{" "}
              <i
                aria-hidden="true"
                className="ovaicon ovaicon-diagonal-arrow"
              />
            </span>
          </div>{" "}
        </div>
        <ul className="info-list">
          <li className="item item-0">
            <h4 className="title">Director:</h4>
            <span className="value">Christine Eve </span>
          </li>
          <li className="item item-1">
            <h4 className="title">Preimier:</h4>
            <span className="value">12, March 2023 </span>
          </li>
          <li className="item item-2">
            <h4 className="title">Writer:</h4>
            <span className="value">Aleesha Rose </span>
          </li>
          <li className="item item-3">
            <h4 className="title">Time:</h4>
            <span className="value">180 Mins </span>
          </li>
          <li className="item item-4">
            <h4 className="title">Rating:</h4>
            <span className="value">PG-13 </span>
          </li>
        </ul>
        <div className="movie-cast">
          <h2 className="movie-title-h2 cast-title">Top Cast</h2>
          <div className="mb-movie-cast-list four_column">
            <div className="movie-cast-item">
              <div className="cast-thumbnail">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-01.jpg"
                  alt="Millie Brown"
                />
              </div>
              <div className="cast-info">
                <h4 className="cast-name">Millie Brown</h4>
                <p className="cast-description">as Eleven </p>
              </div>
            </div>
            <div className="movie-cast-item">
              <div className="cast-thumbnail">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-02.jpg"
                  alt="Finn Wolfhard"
                />
              </div>
              <div className="cast-info">
                <h4 className="cast-name">Finn Wolfhard</h4>
                <p className="cast-description">as Mike Wheeler </p>
              </div>
            </div>
            <div className="movie-cast-item">
              <div className="cast-thumbnail">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-03.jpg"
                  alt="Winona Ryder"
                />
              </div>
              <div className="cast-info">
                <h4 className="cast-name">Winona Ryder</h4>
                <p className="cast-description">as Joyce Byers </p>
              </div>
            </div>
            <div className="movie-cast-item">
              <div className="cast-thumbnail">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-04.jpg"
                  alt="David Harbour"
                />
              </div>
              <div className="cast-info">
                <h4 className="cast-name">David Harbour</h4>
                <p className="cast-description">as Jim Hopper </p>
              </div>
            </div>
            <div className="movie-cast-item">
              <div className="cast-thumbnail">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-05.jpg"
                  alt="Gaten Matarazo"
                />
              </div>
              <div className="cast-info">
                <h4 className="cast-name">Gaten Matarazo</h4>
                <p className="cast-description">as Ted Wheeler </p>
              </div>
            </div>
            <div className="movie-cast-item">
              <div className="cast-thumbnail">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-06.jpg"
                  alt="Natalia Dyer"
                />
              </div>
              <div className="cast-info">
                <h4 className="cast-name">Natalia Dyer</h4>
                <p className="cast-description">as Nancy Wheeler </p>
              </div>
            </div>
            <div className="movie-cast-item">
              <div className="cast-thumbnail">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-07.jpg"
                  alt="Caleb Laughlin"
                />
              </div>
              <div className="cast-info">
                <h4 className="cast-name">Caleb Laughlin</h4>
                <p className="cast-description">as Lucas Sinclair </p>
              </div>
            </div>
            <div className="movie-cast-item">
              <div className="cast-thumbnail">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-08.jpg"
                  alt="Sadie Sink"
                />
              </div>
              <div className="cast-info">
                <h4 className="cast-name">Sadie Sink</h4>
                <p className="cast-description">as Max Mayfield </p>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="main-content">
          <h2 className="movie-title-h2 story-title">Story Line</h2>
          <p>
            In a small town where everyone knows everyone, a peculiar incident
            starts a chain of events that leads to a child’s disappearance,
            which begins to tear at the fabric of an otherwise-peaceful
            community. Dark government agencies and seemingly malevolent
            supernatural forces converge on the town, while a few of the locals
            begin to understand that more is going on than meets the eye.
          </p>
        </div>
        <div className="movie-related">
          <h2 className="movie-title-h2 related-title">
            More Movies Like This
          </h2>
          <div className="row">
            {[1, 2, 3, 4].map((item) => (
              <div className="col-md-12 col-lg-3">
                <MovieItem />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
