import Header from "./Header";
import { Calculator } from "./Calculator";

export const Main = () => {
  return (
    <div className="w-[65%] m-auto lil-screen--width">
      <div className="translate-y-[-3.5rem] flex justify-center lil-screen--translate">
        <Header />
      </div>
      <div className=" bg-white rounded-3xl font-space">
        <Calculator />
      </div>
    </div>
  );
};
