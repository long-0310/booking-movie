import classNames from "classnames/bind"
import styles from "./Header.module.scss"
import logo from "../../assets/images/logo-white.png"
import { Link } from "react-router-dom"
import useClickOutside from "../../hook/useClickOutside"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  const cx = classNames.bind(styles)
  const ref = useRef<HTMLDivElement>()
  const [menuActive, setMenuActive] = useState(1)
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItem = [
    {
      label: "Home",
      to: "/",
      id: 1,
      active: true,
      //   isView: authUser.role !== "User",
    },
    {
      label: "Movies",
      to: "/dang-nhap",
      id: 2,
      //   isView: authUser.role !== "User",
    },
    {
      label: "Discount",
      to: "/khuyen-mai",
      id: 3,
      //   isView: authUser.role !== "User",
    },
    {
      label: "Blogs",
      to: "/tap-chi",
      id: 4,
      //   isView: authUser.role !== "User",
    },
    {
      label: "Contact",
      to: "/lien-he",
      id: 5,
      //   isView: authUser.role !== "User",
    },
  ]
  useClickOutside(ref, () => {
    setIsActiveMobileMenu(false)
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
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <i className="fa-regular fa-user"></i>
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
    </div>
  )
}

export default Header
