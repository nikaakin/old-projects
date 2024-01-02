import { forwardRef } from "react";
import { context } from "../context";

// ***** Commented out things are implementations for class based comp.    *****
// ***** For class based comp you can pass the ref from parent that will   *****
// ***** give parent access to event functions like refToComponentFunction *****
// ***** on functions you can get just the stuff you give passed ref to    *****
// ***** From forwardRef(()=>{}), like at the end. *****************************

// !!!!!!!!!! ##2nd way to do this
// ***** const TestContext = forwardRef((props, ref)=>{
// ***** ...
// ***** return (...)
// ***** })

const TestContextAndStuff = (props, ref) => {
  // state = { da: "trap" };
  // componentDidUpdate() {
  //   setInterval(() => {
  //     console.log("log1");
  //     this.setState({ da: "changed" }, () => console.log("after setState"));
  //     console.log("log2");
  //   }, 2500);
  //   console.log("componentDidMount");
  // }

  // const refToComponentFunction = () => {
  //   console.log(props);
  //   console.log(ref);
  // };

  // render() {
  return (
    <div ref={ref}>
      <hr />
      <button onClick={() => this.setState({ da: "dwubd" })}>
        click and check console (pureComponent componentDidMount work example)
      </button>
      {console.log("render test")}
      <context.Consumer>
        {(value) => {
          return <pre>{JSON.stringify(value, null, 2)}</pre>;
        }}
      </context.Consumer>
      <h1>
        <b>{this.state.da}</b>
      </h1>
      <hr />
    </div>
  );
  // }
};

export default forwardRef(TestContextAndStuff);
