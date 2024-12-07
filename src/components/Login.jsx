import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        className="bg-green-100 rounded-md px-2 py-1 my-2 mx-2 inline-block outline-red-400"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        className="bg-green-100 rounded-md px-2 py-1 mx-2 my-2 inline-block outline-red-400"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        className="bg-green-400 rounded-md px-2 py-1 mx-2 my-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
