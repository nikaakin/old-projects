// your-app-name/src/App.js
import React from "react";
import "../css/DisplayRepo.css";
import githubAPI from "./api/githubAPI";

const { useState, useEffect } = React;

function DisplayRepo() {
  // We'll load the name of a repository, initially setting it to null
  const [name, setName] = useState(null);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(input);

  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true;

    githubAPI(
      `
      query userInfo($login: String!){
        user(login: $login) {
          id
          login
          url
          avatarUrl(size: 10)
          email
          createdAt
          repositories(last: 10) {
            edges {
              node {
                name
                id
                createdAt
                nameWithOwner
                url
                visibility
              }
            }
          }
          
        }
      }
    `,
      { username: user }
    )
      .then((response) => {
        // Avoid updating state if the component unmounted before the fetch completes
        if (!isMounted) {
          return;
        }
        const { data } = response;

        setName(data);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, [user]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const onButtonClick = () => {
    setUser(input);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onButtonClick();
  };

  const displayUser = () => {
    const { login, url, avatarUrl, email, createdAt, repositories } = name.user;
    const date = new Date(createdAt);
    return (
      <div className="user-wrapper">
        <img src={avatarUrl} alt={login} width={50} height={50} />
        <div className="userinfo-wrapper">
          <span className="top-info">
            <a href={url} className="user-link">
              User: {login}
            </a>
            {email.length !== 0 ? (
              <a href={`mailto:${email}`}>Email: {email}</a>
            ) : null}
            <span>Account created : {date.toUTCString()}</span>
          </span>
          <pre>{JSON.stringify(repositories, null, 2)}</pre>
        </div>
      </div>
    );
  };

  // Render "Loading" until the query completes
  return (
    <div className="DisplayRepo">
      <header className="DisplayRepo-header">
        <form onSubmit={onFormSubmit}>
          <label htmlFor="userInput">Search user: </label>
          <input id="userInput" value={input} onChange={inputHandler} />
          <button onClick={onButtonClick}>Search</button>
        </form>
        <div>
          {name != null && name.user !== null ? displayUser() : "No Matches"}
        </div>
      </header>
    </div>
  );
}

export default DisplayRepo;
