import Dashboard from "./Dashboard";
import Group from "./Group";
import UserList from "./UserList";
import { useEffect, useState } from "react";

function Content({ page }) {
  const [users, setUsers] = useState([]);
  const [group, setGroup] = useState('');

  useEffect(() => {
    getUserList();
  }, []);

  const backGroup = (newPage) => {
    setGroup(newPage);
  }

  function getUserList() {
    fetch("http://localhost:800/userList.php")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }

  return (
    <div>
      {page === "dashboard" && <Dashboard />}
      {page === "users" && <UserList usersData={users} backGroup={backGroup} />}
      {page === "groups" && <Group usersData={users} backGroup={backGroup} />}
    </div>
  );
}

export default Content;
