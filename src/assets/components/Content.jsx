import Dashboard from "./Dashboard";
import Group from "./Group";
import UserList from "./UserList";

function Content({ page }) {
  return (
    <div>
      {page === "dashboard" && <Dashboard />}
      {page === "users" && <UserList />}
      {page === "groups" && <Group />}
    </div>
  );
}

export default Content;
