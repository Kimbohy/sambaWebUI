import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import Password from "./Password";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://0.0.0.0:800/register.php", {
        username,
        password,
      });
      console.log(response.data); // Afficher la réponse pour le debug
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <section>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Password password={password} setPassword={setPassword} type={true} />
          <button className="submit" type="submit">
            <h3>Register</h3>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
