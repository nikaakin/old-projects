import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WrongPath } from "./WrongPath";
import { Home } from "./Home";
import { PageManager } from "./PageManager";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":section" element={<PageManager />} />
          </Route>
          <Route path="*" element={<WrongPath />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
