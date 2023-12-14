import { useRef } from "react"
import "./SearchPopup.scss"
import useClickOutside from "../../hook/useClickOutside"

type Props = {
  setIsSearch: (value: boolean) => void
  isSearch: boolean
}

const SearchPopup = ({ setIsSearch, isSearch }: Props) => {
  const ref = useRef<HTMLDivElement>()

  useClickOutside(ref, () => {
    setIsSearch(false)
  })

  return (
    <div className={`ova_wrap_search_popup  ${isSearch && "show"} `}>
      <i className="ovaicon ovaicon-search" />
      <div className="ova_search_popup">
        <div className="search-popup__overlay" />
        <div className="container" ref={ref as React.RefObject<HTMLDivElement>}>
          <form role="search" method="get" className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              defaultValue=""
              name="s"
              title="Search for:"
            />
            <button type="submit" className="search-submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchPopup
