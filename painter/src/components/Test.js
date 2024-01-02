import React, { createContext } from "react";
import { withRouter } from "./hoc/withRouter";
import { ErrorBoundary } from "./ErrorBoundary";

export const Context = createContext({ name: "intialNAme", age: 23 });

class Test extends React.Component {
  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      // <Context.Consumer>
      //   {(value) => (
      //     <div className="header-wrapper">
      //       {console.log(value)}
      //       <label htmlFor="name">name</label>
      //       <input id="name" />
      //     </div>
      //   )}
      // </Context.Consumer>
      <ErrorBoundary>
        <Context.Provider value={{ name: "djsbd" }}>
          <div className="header-wrapper">
            <label htmlFor="name">name</label>
            <input id="name" />
          </div>
        </Context.Provider>
      </ErrorBoundary>
    );
  }
}

Test.contextType = Context;

export default withRouter(Test);
