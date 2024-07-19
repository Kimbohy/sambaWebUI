import BoxHead from "./BoxHead";
import axios from "axios";
import { useState } from "react";

function UserList({ group, usersData, back }) {
  const [users, setUsers] = useState(usersData);
  const [reload, setReload] = useState(false);

  const handleSubmit = async (e, username) => {
    e.preventDefault();
    console.log(username);
    try {
      const response = await axios.post("http://localhost:800/dellUser.php", {
        username,
      });
      console.log("A" + response.data);
      if (response.data.status === "success") {
        // alert(response.data.message);
        getUserList();
      } else {
        alert(response.data.status + response.data.message);
      }
    } catch (error) {
      console.error(`There was an error deleting ${username}!`, error);
    }
  };

  return (
    <ul id="userList">
      <li id="ajout" key={"ajout"}>
        <BoxHead setReload={setReload} groups={group} back={back} />
      </li>
      {users.map((user) => {
        if ((group && user.user_group === group) || !group)
          return (
            <li key={user.UID}>
              <p>{user.login}</p>
              <div className="userRight">
                <p>{user.space}</p>
                <form onSubmit={(e) => handleSubmit(e, user.login)}>
                  <input
                    id={user.UID}
                    className="cache"
                    type="hidden"
                    name="username"
                    value={user.login}
                  />
                  <button type="submit">
                    <img src="/src/assets/img/trash.png" alt="" />
                  </button>
                </form>
              </div>
            </li>
          );
      })}
    </ul>
  );
}

export default UserList;
