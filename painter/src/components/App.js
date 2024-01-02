import Painter from "./Painter";
import Header from "./Header";
import DisplayRepo from "./DisplayRepo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/github-api" element={<DisplayRepo />} />
          <Route path="/painter" element={<Painter />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
