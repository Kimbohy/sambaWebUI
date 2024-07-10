import { useState } from "react";
import axios from "axios";
import Password from "./Password";

function AddComp({ setReload }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [group, setGroup] = useState("gest");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPassword(document.getElementById("password").value);
    try {
      const response = await axios.post("http://localhost:800/addUser.php", {
        username,
        password,
        group,
      });
      if (response.data.status === "success") {
        console.log(response.data.message);
        // setAdding(false);
        localStorage.setItem("message", response.data.message);
        setReload(prev => !prev); // Toggle reload state to refresh the user list
        // localStorage.setItem("message", "");
      } else {
        alert(response.data.status + response.data.message);
      }
    } catch (error) {
      console.error(`There was an error adding ${username}!`, error);
    }
  };

  return (
    <form id="ajouter" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Password password={password} setPassword={setPassword} type={false} />
      <div className="boutton">
        <label htmlFor="group">group :</label>
        <select
          name="group"
          id="group"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="gest">gest</option>
          <option value="L1">L1</option>
          <option value="L2">L2</option>
          <option value="L3">L3</option>
          <option value="M1">M1</option>
          <option value="M2">M2</option>
          <option value="prof">prof</option>
        </select>
      </div>
      <button type="submit">AJOUTER</button>
    </form>
  );
}

export default AddComp;
