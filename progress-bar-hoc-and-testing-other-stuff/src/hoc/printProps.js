import React, { useEffect } from "react";

export const printProps = (WrapperComponent) => {
  class Component extends React.Component {
    state = { prevProps: {}, name: "state" };

    componentDidMount() {
      console.log("mount");
      // this.setState({ prevProps: this.props.data });
    }

    componentDidUpdate(prevProps, prevState) {
      console.log("************************");
      console.log(prevProps, "previous props");
      console.log(prevState, "previous state");
      console.log(this.props, "current props");
      console.log(this.state, "current state");
      console.log("************************");

      if (prevState.prevProps?.data?.id !== prevProps.data?.id) {
        this.setState((state) => (state.prevProps = prevProps));
      }
    }
    render() {
      return (
        <div>
          {console.log("render")}
          <pre>
            previous props{" "}
            {JSON.stringify(this.state.prevProps.data || {}, null, 2)}
          </pre>
          <pre>current props {JSON.stringify(this.props.data, null, 2)}</pre>
          <WrapperComponent {...this.props} />
          {this.props.children || null}
        </div>
      );
    }
  }
  return Component;
};

// **** function inplementation of printProps

// export const printProps = (Component) => {
//   return ({ data, children }) => {
//     useEffect(() => {});
//     return (
//       <div>
//         <pre>current props {JSON.stringify(data, null, 2)}</pre>
//         <Component />
//         {children || null}
//       </div>
//     );
//   };
// };
