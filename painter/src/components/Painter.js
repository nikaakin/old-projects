import { useEffect, useRef, useState } from "react";

import rickAndMortyAPI from "./api/rickAndMortyAPI";
import "../css/painter.css";
import ColorSelection from "./ColorSelection";

const Painter = () => {
  const [character, setCharacter] = useState("");
  const [mouse, setMouse] = useState(false);
  const [strokeStyle, setStrokeStyle] = useState("black");
  const canvasRef = useRef();
  const wrapperRef = useRef();

  const [canvasHW, setCanvasHW] = useState({ clientWidth: 0, clientHeight: 0 });

  useEffect(() => {
    rickAndMortyAPI.then((data) => setCharacter(data));

    setCanvasHW({
      clientWidth: wrapperRef.current.clientWidth,
      clientHeight: wrapperRef.current.clientHeight,
    });
  }, []);

  return (
    <div>
      <div
        className="painter-wrapper"
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={() => setMouse(true)}
        onMouseUp={() => setMouse(false)}
      >
        <div className="painter-canvas--wrapper" ref={wrapperRef}>
          <canvas
            width={canvasHW.clientWidth}
            height={canvasHW.clientHeight}
            onMouseMove={(e) => {
              if (!mouse) return;
              const canvas = canvasRef.current.getContext("2d");
              canvas.strokeStyle = strokeStyle;

              canvas.strokeRect(
                e.clientX - canvas.canvas.offsetLeft,
                e.clientY - canvas.canvas.offsetTop,
                3,
                2
              );
            }}
            ref={canvasRef}
          ></canvas>
        </div>
        <div className="painter-image--wrapper">
          <img
            className="painter-image"
            src={character.image}
            alt={character.name}
          />
        </div>
      </div>
      <div>
        <ColorSelection color={strokeStyle} setColor={setStrokeStyle} />
      </div>
    </div>
  );
};

export default Painter;
