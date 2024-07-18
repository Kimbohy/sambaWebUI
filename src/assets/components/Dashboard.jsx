import { useState, useEffect } from "react";
import MainMemory from "./MainMemory";
import UserNumber from "./UserNumber";
import "../styles/Dashboard.css";
// import FileExplorer from "./FileExplorer";

function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:800/userList.php")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
  },[]);

  return (
    <div id="dashboard">
        <MainMemory />
        { users.length > 0 && <UserNumber users={users} /> }
        {/* <FileExplorer /> */}
    </div>
  );
}

export default Dashboard;