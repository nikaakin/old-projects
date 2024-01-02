import { useState } from "react";
import { SketchPicker, SliderPicker } from "react-color";

const COLORS = [
  "green",
  "blue",
  "black",
  "red",
  "yellow",
  "gray",
  "navy",
  "teal",
  "olive",
  "purple",
  "lime",
  "silver",
];

const ColorSelection = ({ setColor, color }) => {
  // todo style selected color
  const [active, setActive] = useState(false);

  return (
    <div className="color-selection--wrapper">
      <div className="color-selection--pre">
        <span>Select a Color :</span>
        {COLORS.map((color, i) => {
          return (
            <button
              key={i}
              className="color-selection--square"
              style={{ backgroundColor: `${color}` }}
              onClick={() => setColor(color)}
            />
          );
        })}
      </div>
      <div className="color-selection--make">
        <span>Make a Color :</span>
        <div className="slider">
          <SliderPicker
            color={color}
            onChangeComplete={(e) => setColor(e.hex)}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorSelection;
