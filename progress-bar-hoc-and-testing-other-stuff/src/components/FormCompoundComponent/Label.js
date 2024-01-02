export const Label = ({ focus, setFocus }) => {
  return (
    <label className="focus" onClick={() => setFocus(true)}>
      You can get Modal window if you type: <i>(anything: optional)</i>
      <b>modal</b>
      <i>(anything: optional)</i> <br />
    </label>
  );
};
