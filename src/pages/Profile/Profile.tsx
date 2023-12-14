import HeroImg from "../../components/HeroImg/HeroImg"
import Layout from "../../components/Layout/Layout"
import LineMovie from "../../components/LineMovie"
import "./Profile.scss"

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className="movie-category">
      <HeroImg
        backgroundImageUrl={
          "https://wallpapers.com/images/hd/profile-picture-background-4krfg95rt6yb42vo.jpg"
        }
        description="Thông Tin Của Tôi"
        onlyBackground
      />
      <LineMovie />
      <Layout>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle img-fluid"
                      style={{ width: 100 }}
                    />
                  </div>
                  <h4 className="mb-2">Julie L. Arsenault</h4>
                  <p className="text-muted mb-4">
                    @Programmer <span className="mx-2">|</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Profile
