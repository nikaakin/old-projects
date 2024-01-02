import { useEffect, useState } from "react";
import jsonFromPublicFolder from "../api/jsonFromPublicFolder";

const JsonFromPublic = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const res = await jsonFromPublicFolder;
      setData(res);
    };
    fetch();
  }, []);

  return (
    <div>
      <fieldset>data from public folder manifest.json</fieldset>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default JsonFromPublic;
