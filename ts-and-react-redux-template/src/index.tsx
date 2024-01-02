import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux";
import { Provider } from "react-redux";
import { RepositoriesList } from "./components/RepositoriesList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <h1>Search repositories</h1>
        <RepositoriesList />
      </div>
    </Provider>
  </React.StrictMode>
);
