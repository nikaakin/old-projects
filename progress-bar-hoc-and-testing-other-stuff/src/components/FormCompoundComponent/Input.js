import { useEffect, useRef } from "react";

export const Input = ({ input, setInput, focus, setFocus }) => {
  let inputRef = useRef();
  useEffect(() => {
    focus && inputRef.current.focus();

    const onClick = (e) => {
      !e.target.classList.contains("focus") && setFocus(false);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus]);
  return (
    <input
      className="focus"
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      // ref={(ref) => (inputRef = ref)}
      ref={inputRef}
    />
  );
};
