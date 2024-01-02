import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";
import TestContextAndStuff from "./TestContextAndStuff";

const Header = React.lazy(() => import("./Header"));

export const Home = () => {
  const testContextRef = useRef();

  return (
    <div>
      {console.log("render home")}
      <Header />

      <Outlet />
      <ErrorBoundary>
        <TestContextAndStuff ref={testContextRef} />
      </ErrorBoundary>
    </div>
  );
};
