import React from "react";
import { motion } from "framer-motion";
import { Backdrop } from "./Backdrop";

export function Modal({ closeModal, text }) {
  const dropIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
      >
        {/* Your modal content here */}
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button onClick={closeModal}>Close Modal</button>
      </motion.div>
    </Backdrop>
  );
}
