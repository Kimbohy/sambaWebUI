import { useEffect, useState } from "react";
import BoxHead from "./BoxHead";
import UserList from "./UserList";
import MainMemory from "./MainMemory";

function Group({usersData, backGroup}) {
  const [reload, setReload] = useState(false);
  const [groups, setGroups] = useState([]);
  const [userMember, setUserMember] = useState([]);

  useEffect(() => {
    getGroupList();
  }, [reload]);

  function getGroupList() {
    fetch("http://localhost:800/userList.php")
      .then((response) => response.json())
      .then((data) => {
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
          <BoxHead setReload={setReload} backGroup={backGroup} />
        </li>
      ) : null}
      {userMember.length === 0 ? (
        groups.map(([group]) => (
          <li key={group} onClick={() => member(group)}>
            <p>{group}</p>
          </li>
        ))
      ) : (
        <UserList group={userMember} usersData={usersData} funct={setReload} />
      )}
    </ul>
  );
}

export default Group;
