export default fetch("./manifest.json")
  .then((res) => res.json())
  .then((data) => data);
