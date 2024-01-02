import React, { useContext, useEffect } from "react";
import "../css/modal.css";
import { context } from "../context";
import closeImage from "../images/close.png";

const Modal = ({ setClick }) => {
  const { setModal } = useContext(context);
  useEffect(() => {
    const onClick = (e) => {
      e.target.classList.contains("modal-wrapper") && setModal(false);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h1>modal</h1>
        <button
          className="modal-close"
          onClick={() => {
            setModal(false);
          }}
        >
          <img
            src={closeImage}
            alt="close button"
            className="modal-close--image"
          />
        </button>
        <button onClick={() => setClick((click) => click + 1)}>
          click to raise click count on adjacent div
        </button>
        <button onClick={() => setModal(false)}>close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
