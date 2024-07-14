import { useEffect, useState } from "react";
import BoxHead from "./BoxHead";
import UserList from "./UserList";
import MainMemory from "./MainMemory";

function Group() {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [groups, setGroups] = useState([]);
  const [userMember, setUserMember] = useState([]);

  useEffect(() => {
    getUserList();
  }, [reload]);

  function getUserList() {
    fetch("http://localhost:800/userList.php")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        getGroups(data);
      });
  }

  function getGroups(data) {
    const groups = {};
    data.forEach((user) => {
      if (groups[user.user_group]) {
        groups[user.user_group].push(user.login);
      } else {
        groups[user.user_group] = [user.login];
      }
    });
    setGroups(Object.entries(groups));
  }

  const member = (group) => {
    setUserMember(group);
  };

  return (
    <ul id="userList">
      {userMember.length === 0 ? (
        <li id="ajout" key="ajout">
          <BoxHead setReload={setReload} />
        </li>
      ) : null}
      {userMember.length === 0 ? (
        groups.map(([group]) => (
          <li key={group} onClick={() => member(group)}>
            <p>{group}</p>
          </li>
        ))
      ) : (
        <UserList group={userMember} />
      )}
    </ul>
  );
}

export default Group;
