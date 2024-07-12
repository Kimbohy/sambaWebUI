function Aside() {
  localStorage.setItem("page", "dashboard");
  return (
    <aside>
      <div id="profile">
        <img src="/src/assets/img/1.webp" alt="" />
        <p id="logName">Nom</p>
      </div>
      <ul id="menu">
        <li id="dashboardSection" onClick={localStorage.setItem("page", "dashboard")}>
          <img src="/src/assets/img/app.png" alt="" />
          <p>Dashboard</p>
        </li>
        <li id="userSection" onClick={localStorage.setItem("page", "users")}>
          <img src="/src/assets/img/user.png" alt="" />
          <p>Users</p>
        </li>
        <li id="groupSection" onClick={localStorage.setItem("page", "group")}>
          <img src="/src/assets/img/people.png" alt="" />
          <p>Groups</p>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
