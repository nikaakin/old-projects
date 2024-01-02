import { useState, Children, cloneElement, useContext } from "react";
import { context } from "../../context";

export const Form = ({ children }) => {
  const [input, setInput] = useState("");
  const [focus, setFocus] = useState(false);

  // ** viable option (will be easier and better this way, you still get setModal function)
  // const data = useContext(context)

  const handleSubmit = (e, setModal) => {
    e.preventDefault();
    input.includes("modal") && setModal(true);
  };
  const childrenWithProps = Children.map(children, (child) => {
    const clone = cloneElement(child, { input, setInput, focus, setFocus });
    return clone;
  });

  return (
    <context.Consumer>
      {({ setModal }) => (
        <form onSubmit={(e) => handleSubmit(e, setModal)}>
          <>{childrenWithProps}</>
        </form>
      )}
    </context.Consumer>
  );
};
