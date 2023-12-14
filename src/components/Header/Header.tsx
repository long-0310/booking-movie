import classNames from "classnames/bind"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo-white.png"
import useClickOutside from "../../hook/useClickOutside"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { loginReducer, logout } from "../../redux/slice/Login/Login"
import DropMenu from "../DropdownMenu/DropMenu"
import SearchPopup from "../SearchPopup"
import styles from "./Header.module.scss"

const Header = () => {
  const cx = classNames.bind(styles)
  const ref = useRef<HTMLDivElement>()
  const refDropDown = useRef<HTMLDivElement>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [menuActive, setMenuActive] = useState(1)
  const [isSearch, setIsSearch] = useState(false)
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { accessToken } = useAppSelector(loginReducer)
  const [isOpenMenu, setOpenMenu] = useState(false)
  const menuItem = [
    {
      label: "Trang chủ",
      to: "/",
      id: 1,
      active: true,
      //   isView: authUser.role !== "User",
    },
    {
      label: "Phim",
      to: "/movies",
      id: 2,
      //   isView: authUser.role !== "User",
    },
    {
      label: "Khuyến mãi",
      to: "/khuyen-mai",
      id: 3,
      //   isView: authUser.role !== "User",
    },
    {
      label: "Tạp chí",
      to: "/tap-chi",
      id: 4,
      //   isView: authUser.role !== "User",
    },
    {
      label: "Liên hệ",
      to: "/lien-he",
      id: 5,
      //   isView: authUser.role !== "User",
    },
  ]

  const listMenu = [
    { name: "My Profile", path: "/thong-tin-cua-toi" },
    { name: "Logout", path: "/logout" },
  ]
  const handleSearch = () => {
    setIsSearch(!isSearch)
  }
  const routes = ["/change-password", "/profile", "/preferences"]

  const handleItemClick = (path: string) => {
    const firstRoute = routes[0]
    if (path === "/setting") {
      navigate(firstRoute)
    } else if (path === "/logout") {
      navigate(path)
      dispatch(logout())
    } else {
      navigate(path)
    }
  }

  useClickOutside(ref, () => {
    setIsActiveMobileMenu(false)
  })

  useClickOutside(refDropDown, () => {
    setOpenMenu(false)
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50
      const scrolled = window.scrollY > scrollThreshold
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={cx("header", { scrolled: isScrolled })}>
      <div className={cx("header-inside")}>
        <div className={cx("header-inside-logo")}>
          <Link to={"/"}>
            <img src={logo} alt="" />{" "}
          </Link>
        </div>
        <div className={cx("nav-menu")}>
          <ul className={cx("nav-list")}>
            {menuItem.map((item) => (
              <li onClick={() => setMenuActive(item.id)}>
                <Link
                  className={cx(`${item.id === menuActive ? "active" : ""}`)}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx("nav-right")}>
          <div onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div
            ref={refDropDown as React.RefObject<HTMLDivElement>}
            onClick={() => {
              if (accessToken) {
                setOpenMenu(!isOpenMenu)
              } else {
                navigate("/login")
              }
            }}
          >
            <i className="fa-regular fa-user"></i>

            <DropMenu
              isOpen={isOpenMenu}
              listItem={listMenu}
              label="name"
              link="path"
              onItemClick={handleItemClick}
            />
          </div>
        </div>
        <div
          className={cx("mobile-nav", `${isActiveMobileMenu ? "active" : ""}`)}
          onClick={() => setIsActiveMobileMenu((prevState) => !prevState)}
        >
          <div className={cx("menu")}>
            <span
              className={cx(
                "line",
                "one",
                `${isActiveMobileMenu ? "active-line-one" : ""}`,
              )}
            ></span>
            <span
              className={cx(
                "line",
                "two",
                `${isActiveMobileMenu ? "active-line-two" : ""}`,
              )}
            ></span>
            <span
              className={cx(
                "line",
                "three",
                `${isActiveMobileMenu ? "active-line-three" : ""}`,
              )}
            ></span>
          </div>
        </div>
      </div>
      <div
        className={cx("mobile-nav-menu")}
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div
          className={cx(
            "container-mobile",
            `${isActiveMobileMenu ? "mobile-menu-inactive" : ""}`,
          )}
        >
          <div
            className={cx("close-menu-mobile")}
            onClick={() => setIsActiveMobileMenu(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul>
            {menuItem.map((item) => (
              <li
                onClick={() => {
                  setMenuActive(item.id)
                  setIsActiveMobileMenu(false)
                }}
              >
                <Link
                  className={cx(
                    `${item.id === menuActive ? "active" : ""}`,
                    "list-mobile-style",
                  )}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={cx(
          "mobile-nav-menu-bg",
          `${isActiveMobileMenu ? "mobile-menu-bg-inactive" : ""}`,
        )}
      ></div>
      <div className="position-absolute">
        <SearchPopup isSearch={isSearch} setIsSearch={setIsSearch} />
      </div>
    </div>
  )
}

export default Header
