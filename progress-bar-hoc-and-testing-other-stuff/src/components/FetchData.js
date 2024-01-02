import React, {  useState } from "react";
import jsonplaceholderapi from "../api/jsonplaceholderapi";
import Button from "./Button";

export const FetchData = () => {
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState({});
  const fetchData = async () => {
    const num = Math.round(Math.random() * 500) - 1;

    try {
      const res = await jsonplaceholderapi.get(`${num}`).then((data) => {
        return data;
      });
      setResult(res.data);
    } catch (err) {
      console.log("error: ", err.message);
    } finally {
      console.log("fetched");
    }
  };

  const fetchJsonPLaceholder = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            setCounter((c) => c + 1);
            fetchData();
          }}
        >
          Click button to fetch data, already fetched {counter} times.
        </button>
        <Button data={result}>
          <div style={{ padding: "10px 10px" }}>child</div>
        </Button>
      </React.Fragment>
    );
  };
  return fetchJsonPLaceholder();
};
