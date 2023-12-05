import Sidebar from "../../components/Sidebar/Sidebar"
import Slider from "react-slick"
import "./HomePage.scss"
import LineMovie from "../../components/LineMovie"
import BoxIcon from "../../components/BoxIcon/BoxIcon"
import MovieItem from "../../components/MovieItem/MovieItem"
import HeadingContent from "../../components/HeadingContent/HeadingContent"
import Button from "../../components/Button"
import MoviePopup from "../../components/MoviePopup"
import { useState } from "react"

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

const dataSlice = [
  {
    name: "Wrong Turn Part 2",
    imageUrl:
      "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner.jpg",
    category: "Thriller Movie",
    description: " Writen and Directed by Aleesha Rose / Ireland 2023",
  },
  {
    name: "The Witcher Session 2",
    imageUrl:
      "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/banner-02.jpg",
    category: "Action Movie",
    description: " Writen and Directed by Aleesha Rose / Ireland 2023",
  },
  {
    name: "Love Nightmare",
    imageUrl:
      "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner3.jpg",
    category: "Action Movie",
    description: " Writen and Directed by Aleesha Rose / Ireland 2023",
  },
]

const dataIconBox = [
  {
    title: "Upcoming Film Festivals",
    subTitle: "Join Now",
  },
  {
    title: "Watch Film Awards",
    subTitle: "Watch Now",
  },
  {
    title: "Comedy TV Shows",
    subTitle: "Get Ticket",
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
  const [isBookingPopup, setIsBookingPopup] = useState(false)

  const handleBookingPopup = () => {
    setIsBookingPopup(!isBookingPopup)
  }

  return (
    <>
      <div className="main-home-page">
        <div className="slide-home-page">
          <Slider {...settingSlick}>
            {dataSlice.map((item: any) => (
              <div>
                <Sidebar
                  setShowOption={setIsBookingPopup}
                  name={item.name}
                  category={item.category}
                  imageUrl={item.imageUrl}
                  description={item.description}
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
          <HeadingContent
            subTitle="Watch New Movies"
            title="Movies Now Playing"
          />
          <div className="row">
            <div className="slick-movie-item">
              <Slider {...settingSlickFilm}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <MovieItem handleMovieBooking={handleBookingPopup} />
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
                    subTitle="Documentary"
                    title="Life Under an Umbrella"
                    leftContent
                    textColor
                  />
                  <p className="documentary-description">
                    Phasellus non cursus ligula, sed mattis urna. Aenean ac tor
                    gravida, volutpat quam eget, consequat elit.
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
                    <Button label="More Info" largeBtn secondBtn />
                  </div>
                </div>
              </div>
              <div className="col-md-12  col-lg-6">
                <div className="documentary-right">
                  <div className="documentary-video">
                    <div className="documentary-video-container">
                      <div className="documentary-ova-video">
                        <div className="text">Watch the Trailer </div>

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
                  40% Discount for Students
                </div>

                <div className="ticket-homepage-btn">
                  <Button
                    label="Book Your Ticket"
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
      {isBookingPopup && <MoviePopup setShowOption={setIsBookingPopup} />}
    </>
  )
}

export default HomePage
