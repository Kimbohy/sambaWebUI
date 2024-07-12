import UserList from "./UserList";
import { useState } from "react";

function Content() {
  const [page, setPage] = useState("dashboard");
  return (
    <div>
      {localStorage.getItem("page") === "dashboard" && <UserList />}
      {localStorage.getItem("page") === "users" && <h1>Users</h1>}
      {localStorage.getItem("page") === "group" && <h1>Groups</h1>}
      {!localStorage.getItem("page") && <h1>Dashboard</h1>}
    </div>
  );
}

export default Content;
