import React from "react";
import ProgressBar from "./ProgressBar";

const positions = ["First", "Second", "Third", "Four"];

class ProgressBarOnState extends React.PureComponent {
  state = { currentPosition: "start" };
  render() {
    return (
      <div>
        <div style={{ marginBlock: "50px", border: "1px solid black" }}>
          <ProgressBar
            positions={positions}
            currentPosition={this.state.currentPosition}
          />
        </div>
        <fieldset style={{ marginBlock: " 10px" }}>
          Change a state to <b style={{ color: "#734213" }}>Progress</b> a
          porgress bar
        </fieldset>
        <button
          onClick={() => {
            if (!this.state.currentPosition) return;
            this.setState(({ currentPosition }) => {
              return {
                currentPosition:
                  positions[positions.indexOf(currentPosition) + 1],
              };
            });
          }}
        >
          Click to change state
        </button>
        <button
          onClick={() => {
            this.setState({ currentPosition: "blank" });
          }}
        >
          refresh the state
        </button>
      </div>
    );
  }
}

export default ProgressBarOnState;

// todo progress bar with js
// right now it uses animations from progressbar.css
