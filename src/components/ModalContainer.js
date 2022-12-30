import React from "react";
import { Modal } from "@mui/material";

// import ModalContainer

export default function ModalContainer(props) {
  const { isOpenModal, closeModal, children } = props;
  return (
    <Modal
      className="modal"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}
