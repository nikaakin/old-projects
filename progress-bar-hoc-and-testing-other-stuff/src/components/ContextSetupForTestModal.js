import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { context } from "../context";
import Modal from "./Modal";

export const ContextSetupForModal = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [click, setClick] = useState(0);
  const Context = useContext(context);
  const { Provider } = context;
  return (
    <div>
      <>clicked {click}</>
      <Provider value={{ ...Context, setModal }}>
        {modal &&
          createPortal(
            <Modal setClick={setClick} />,
            document.querySelector("#modal")
          )}
        {children}
      </Provider>
      {/* <button onClick={() => setModal((modal) => !modal)}>Get Modal</button> */}
    </div>
  );
};
