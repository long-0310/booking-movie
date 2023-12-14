import HeroImg from "../../components/HeroImg/HeroImg"
import Layout from "../../components/Layout/Layout"
import LineMovie from "../../components/LineMovie"
import "./Discount.scss"

type Props = {}

const Discount = (props: Props) => {
  return (
    <div className="movie-category">
      <HeroImg
        backgroundImageUrl={
          "https://png.pngtree.com/background/20230618/original/pngtree-empty-cinema-ticket-with-popcorn-filmstrip-clapper-board-and-movie-camera-picture-image_3709342.jpg"
        }
        description="Tính Năng Đang Được Phát Triển"
        onlyBackground
      />
      <LineMovie />
      <Layout></Layout>
    </div>
  )
}

export default Discount
