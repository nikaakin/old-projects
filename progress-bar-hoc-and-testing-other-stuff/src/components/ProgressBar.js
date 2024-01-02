import React from "react";
import "../css/progressbar.css";
class ProgressBar extends React.Component {
  render() {
    const cur = this.props.currentPosition;
    const positions = this.props.positions;
    const curIndex = positions.indexOf(cur);
    return (
      <div className=" progress-bar--wrapper">
        <div
          className={`big-ones ${curIndex >= 0 && "line"} `}
          style={{
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        />
        <div className="middle-one">
          {positions.slice(0, -1).map((pos, i) => {
            return (
              <React.Fragment key={i}>
                <div className="number-word">
                  <div className={`number ${curIndex > i - 1 && "round"}`}>
                    {i + 1}
                  </div>
                  <span className={`word ${curIndex > i - 1 && "clr"}`}>
                    {pos}
                  </span>
                </div>
                {positions[i + 2] && (
                  <div className={`lil-ones ${curIndex > i && "line"}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div
          className={`big-ones ${curIndex > positions.length - 2 && "line"} `}
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        />
      </div>
    );
  }
}
export default ProgressBar;
