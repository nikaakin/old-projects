import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    // ** can change state here instead of in getDerivedStateFromError
    // ** this is alternative
  }

  render() {
    console.log(this.state.hasError);
    if (this.state.hasError) {
      return (
        <div style={{ color: "blue" }}>
          <hr /> Something went wrong ...
          <hr />
          <span>
            <b>
              Check errorBoundary.js and TestContextAndStuff.js to see whats
              going on here.
            </b>
            <br /> change TestContextAndStuff.js if you want error to go away
            <br />
            (there is class component things used in function component)
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}
