import { useEffect, useState } from "react"
import Slider from "react-slick"
import BoxIcon from "../../components/BoxIcon/BoxIcon"
import Button from "../../components/Button"
import HeadingContent from "../../components/HeadingContent/HeadingContent"
import LineMovie from "../../components/LineMovie"
import MovieItem from "../../components/MovieItem/MovieItem"
import MoviePopup from "../../components/MoviePopup"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getAllMovie, movieReducer } from "../../redux/slice/Movie/Movie"
import "./HomePage.scss"
import { Navigate, useNavigate } from "react-router-dom"

const settingSlickFilm = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  draggable: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
}

const dataIconBox = [
  {
    title: "Liên hoan phim",
    subTitle: "Xem ngay",
  },
  {
    title: "Xem giải thưởng phim",
    subTitle: "Xem ngay",
  },
  {
    title: "Chương trình truyền hình",
    subTitle: "Nhận vé",
  },
]

const settingSlick = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
}

const HomePage = () => {
  const initial = {
    pageNumber: 1,
    pageSize: 10,
  }
  const dispatch = useAppDispatch()
  const [isBookingPopup, setIsBookingPopup] = useState(false)
  const { listMovie } = useAppSelector(movieReducer)
  const [movieId, setMovieId] = useState("")
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
  }, [])

  return (
    <>
      <div className="main-home-page">
        <div className="slide-home-page">
          <Slider {...settingSlick}>
            {listMovie.map((item: any) => (
              <div>
                <Sidebar
                  setShowOption={handleBookingPopup}
                  name={item.name}
                  category={item.movieTypeName}
                  imageUrl={item.heroImage}
                  description={item.director}
                  id={item.id}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <LineMovie />
      <div className="elementor-element">
        <div className="elementor-background-overlay"></div>
        <div className="elementor-element-inside">
          <div className="row">
            {dataIconBox.map((item) => (
              <div className="col-md-12 g-4 col-lg-4">
                <BoxIcon title={item.title} subTitle={item.subTitle} />
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-ticket-box">
          <HeadingContent subTitle="Xem phim mới" title="Phim đang chiếu" />
          <div className="row">
            <div className="slick-movie-item">
              <Slider {...settingSlickFilm}>
                {listMovie.map((item: any) => (
                  <MovieItem
                    handleMovieBooking={handleBookingPopup}
                    title={item.name}
                    movieType={item.movieTypeName}
                    image={item.image}
                    duration={item.director}
                    id={item.id}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="documentary">
          <div className="elementor-background-overlay-documentary"></div>
          <div className="documentary-box">
            <div className="row">
              <div className="col-md-12  col-lg-6">
                <div className="w-100">
                  <HeadingContent
                    subTitle="Phim Tài Liệu"
                    title="Cuộc Sống Dưới Chiếc Ô"
                    leftContent
                    textColor
                  />
                  <p className="documentary-description">
                    Những chiếc ô không thể ngăn cơn mưa nhưng nó giúp ta đứng
                    được dưới mưa. Sự tự tin có thể không mang lại thành công
                    nhưng nó mang đến...
                  </p>
                  <div className="documentary-award-box">
                    <div className="documentary-award">
                      <img
                        decoding="async"
                        width="115"
                        height="94"
                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/awards-banner-01.png"
                        className="attachment-large size-large wp-image-463"
                        alt=""
                      />{" "}
                    </div>
                    <div className="documentary-award">
                      <img
                        decoding="async"
                        width="115"
                        height="94"
                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/awards-banner-02.png"
                        className="attachment-large size-large wp-image-463"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className="documentary-award-btn">
                    <Button label="Thêm thông tin" largeBtn secondBtn />
                  </div>
                </div>
              </div>
              <div className="col-md-12  col-lg-6">
                <div className="documentary-right">
                  <div className="documentary-video">
                    <div className="documentary-video-container">
                      <div className="documentary-ova-video">
                        <div className="text">Xem trailer</div>

                        <div className="icon-content-view video_active">
                          <div className="audio_content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="130"
                              height="130"
                              viewBox="0 0 130 130"
                              fill="none"
                            >
                              <rect width="130" height="130" fill="#d96c2c" />

                              <circle cx="65" cy="65" r="65" fill="#d96c2c" />
                              <path
                                d="M81.5 60.6699C84.8333 62.5944 84.8333 67.4056 81.5 69.3301L60.5 81.4545C57.1667 83.379 53 80.9734 53 77.1244L53 52.8756C53 49.0266 57.1667 46.621 60.5 48.5455L81.5 60.6699Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          decoding="async"
                          width="311"
                          height="124"
                          src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-arrow-video.png"
                          className="image-arrow"
                          alt=""
                          srcSet="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-arrow-video.png 311w, https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-arrow-video-300x120.png 300w"
                          sizes="(max-width: 311px) 100vw, 311px"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket-homepage-box">
          <div className="ticket-homepage">
            <div className="ticket-homepage-box-2">
              <div className="ticket-homepage-content">
                <div className="ticket-homepage-overlay"></div>
                <div className="ticket-homepage-title">
                  Giảm giá 40% cho học sinh
                </div>

                <div className="ticket-homepage-btn">
                  <Button
                    label="Đặt vé ngay"
                    blackBtn
                    type="submit"
                    secondBtn
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isBookingPopup && (
        <MoviePopup idMovie={movieId} setShowOption={setIsBookingPopup} />
      )}
    </>
  )
}

export default HomePage
