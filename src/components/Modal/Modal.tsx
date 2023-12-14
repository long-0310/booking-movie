import React, { lazy, Suspense, useRef, useState } from "react"
import classNames from "classnames/bind"
import styles from "./Modal.module.scss"

import Button from "../Button"
import useClickOutside from "../../hook/useClickOutside"

interface ModalProps {
  title?: string
  isModal?: boolean
  setOpenModals: (isModal: boolean) => void
  children?: any
  customClass?: string
  classType?: string
  customConfirmClass?: string
  isConfirmClose?: any
}

function ModalDesignation({
  title,
  isModal,
  setOpenModals,
  customClass,
  children,
  classType,
  customConfirmClass,
  isConfirmClose,
}: ModalProps) {
  const cx = classNames.bind(styles)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const modalRef = useRef<any>()
  const closeModal = () => {
    if (showConfirmationModal) {
      setShowConfirmationModal(false)
    } else {
      setShowConfirmationModal(true)
    }
  }

  const confirmCloseModal = () => {
    setShowConfirmationModal(false)
    setOpenModals(false)
  }

  const cancelCloseModal = () => {
    setShowConfirmationModal(false)
  }

  const normalClose = () => {
    setOpenModals(false)
  }

  useClickOutside(modalRef, () => setOpenModals(false))

  return (
    <div className="modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDesignation
