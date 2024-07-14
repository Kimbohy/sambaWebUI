import Dashboard from "./Dashboard";
import Group from "./Group";
import UserList from "./UserList";
import { useState } from "react";

function Content() {
  const [page, setPage] = useState("dashboard");
  return (
    <div>
      {localStorage.getItem("page") === "dashboard" && <Dashboard />}
      {localStorage.getItem("page") === "users" && <UserList />}
      {localStorage.getItem("page") === "group" && <Group />}
      {!localStorage.getItem("page") && <h1>Dashboard</h1>}
    </div>
  );
}

export default Content;
