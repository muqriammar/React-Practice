import React, { useState } from "react";
import { Container } from "./Container";
import { Message } from "./Message";
import { Modal } from "./Modal";
import "./styles.css";

export default function App() {
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const close = () => setShowModal(false);
  const open = () => setShowModal(true);

  const handleButtonClick = () => {
    setShowSecondComponent(true);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      {!showSecondComponent && <Container onButtonClick={handleButtonClick} />}
      {showSecondComponent && !showModal && (
        <Message openModal={openModal} />
      )}
      {showModal && <Modal closeModal={close} />}
    </div>
  );
}
