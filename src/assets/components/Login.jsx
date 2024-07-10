import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Password from "./Password";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setPassword(document.getElementById("password").value);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:800/login.php", {
        username,
        password,
      });
      if (response.data === "Login successful") {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        navigate("/admin");
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <section>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Password password={password} setPassword={setPassword} type={true} />
          <button className="submit" type="submit">
            <h3>Login</h3>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
