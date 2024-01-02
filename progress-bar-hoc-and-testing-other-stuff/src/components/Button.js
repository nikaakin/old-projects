import { useState, useReducer, useContext } from "react";
import { context } from "../context";
import { printProps } from "../hoc/printProps";

const Button = () => {
  const [counter, setCounter] = useState(0);
  const [object, setObject] = useState({ counter: 0, just: true });

  const Context = useContext(context);

  return (
    <div>
      increment this
      <button
        onClick={() => {
          setObject((c) => {
            return { ...c, counter: c.counter + 1 };
          });
          Context.name = "adon";
        }}
      >
        {Context.name}
        {object.counter}
      </button>
    </div>
  );
};

export default printProps(Button);
