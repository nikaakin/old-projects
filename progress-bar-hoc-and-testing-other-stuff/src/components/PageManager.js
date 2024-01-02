import React from "react";
import { useParams } from "react-router-dom";

import { FetchData } from "./FetchData";
import FormCompoundComponent from "./FormCompoundComponent";
import { Home } from "./Home";
import HomePage from "./HomePage";
import JsonFromPublic from "./JsonFromPublic";
import ProgressBarOnState from "./ProgressBarOnState";
import { WrongPath } from "./WrongPath";

export const pages = {
  "": <Home />,
  home: <HomePage />,
  fetch: <FetchData />,
  manifest: <JsonFromPublic />,
  form: <FormCompoundComponent />,
  progressBarOnState: <ProgressBarOnState />,
};

export const PageManager = () => {
  const { section } = useParams();

  const path = Object.keys(pages).find((path) => path === section && path);

  return <div>{path ? pages[path] : <WrongPath />}</div>;
};
