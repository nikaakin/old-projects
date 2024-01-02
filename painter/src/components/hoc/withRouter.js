import React from "react";
import { useParams } from "react-router-dom";

export const withRouter = (Wrapped) => {
  const Component = (props) => {
    const param = useParams();

    return <Wrapped {...props} hoc="hocsfbsbf" param={param} />;
  };
  return Component;
};
