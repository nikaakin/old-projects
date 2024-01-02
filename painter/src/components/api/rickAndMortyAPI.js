export default fetch(
  `https://rickandmortyapi.com/api/character/${Math.ceil(Math.random() * 826)}`
).then((res) => res.json());
