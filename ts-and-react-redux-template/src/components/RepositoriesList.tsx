import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RepositoriesList: React.FC = () => {
  const [query, setQuery] = useState("");
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );
  const { searchRepositories } = useActions();

  const onSubmitQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(query);
  };

  return (
    <div>
      <form onSubmit={onSubmitQuery}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>...loading</h3>}
      {!error && !loading && data && (
        <ul>
          {data.map((rep) => (
            <li key={rep}>{rep}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
