import classNames from "classnames/bind"
import React, { useEffect, useMemo, useRef, useState } from "react"

import styles from "./Dropdown.module.scss"
import useClickOutside from "../../hook/useClickOutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

interface IDataItem {
  [key: string]: any
}
interface DropdownProps {
  options: IDataItem[]
  setValueChosen: (value: any) => void
  valueChosen: any
  className?: string
  value?: string
  label?: string | number
  title?: string
  defaultValue?: IDataItem
  loading?: boolean
  handleGetOption?: () => void
  setValAfterCallApi?: boolean
  isSearch?: boolean | undefined
}

export default function Dropdown({
  options,
  className,
  label = "",
  title = "",
  value = "",
  setValueChosen,
  valueChosen,
  defaultValue,
  loading,
  handleGetOption,
  setValAfterCallApi = false,
  isSearch = false,
}: DropdownProps) {
  const cx = classNames.bind(styles)
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<IDataItem | undefined>(
    defaultValue,
  )
  const [search, setSearch] = useState("")
  const ref = useRef<HTMLDivElement>()

  const handleOptionSelect = (option: IDataItem) => {
    setValueChosen(option[value])
    if (!setValAfterCallApi) {
      setSelectedOption(option)
    }
    setShowOptions(false)
  }

  const handleDropdownToggle = () => {
    setShowOptions(!showOptions)
    if (handleGetOption) {
      handleGetOption()
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setSearch(event.target.value)
  }

  const filteredOptions = useMemo(() => {
    if (!options || !Array.isArray(options)) {
      return []
    } else {
      if (search !== "") {
        return options.filter((option) => {
          const labelValueSearch = search.toLowerCase()
          const labelValueOption = option[label]?.toString().toLowerCase() || ""
          return labelValueOption.includes(labelValueSearch)
        })
      } else {
      }
    }
    return options
  }, [options, search])

  useEffect(() => {
    if (valueChosen && options) {
      setSelectedOption(options.find((e) => e[value] === valueChosen))
    }
  }, [valueChosen, options])

  useClickOutside(ref, () => setShowOptions(false))
  return (
    <div
      className={cx("dropdown-container", className)}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div
        className={
          showOptions === true
            ? cx("dropdown-headerShow")
            : cx("dropdown-header")
        }
        onClick={handleDropdownToggle}
      >
        <div className={cx("label")}>
          {selectedOption ? selectedOption[label] : title}
        </div>
        <div className={cx("icon")}>
          {showOptions === true ? (
            <FontAwesomeIcon
              style={{ color: "#DCDCDC" }}
              icon={faCaretDown}
              rotation={180}
            />
          ) : (
            <FontAwesomeIcon style={{ color: "#DCDCDC" }} icon={faCaretDown} />
          )}
        </div>
      </div>
      {showOptions && (
        <div className={cx("dropdown-options")}>
          {isSearch ? (
            <>
              <div className={cx("dropdown-options_inputSearch")}>
                {/* <Input
                  placeholder="Search ...."
                  value={search}
                  className={cx("inputDrop")}
                /> */}
              </div>
              {/* <div
                    className={cx("dropdown-option", {
                      active: selectedOption && selectedOption[value] === "",
                    })}
                    onClick={() =>
                      handleOptionSelect({ [value]: "", [label]: title })
                    }
                  >
                    {title}
                  </div> */}
              {filteredOptions?.map((option, index) => (
                <div
                  key={index}
                  className={cx("dropdown-option", {
                    active:
                      selectedOption && selectedOption[value] === option[value],
                  })}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option[label]}
                </div>
              ))}
            </>
          ) : (
            <>
              {/* <div
                    className={cx("dropdown-option", {
                      active: selectedOption && selectedOption[value] === "",
                    })}
                    onClick={() =>
                      handleOptionSelect({ [value]: "", [label]: title })
                    }
                  >
                    {title}
                  </div> */}
              {options?.map((option, index) => (
                <div
                  key={index}
                  className={cx("dropdown-option", {
                    active:
                      selectedOption && selectedOption[value] === option[value],
                  })}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option[label]}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}
