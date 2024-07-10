function Aside() {
  return (
    <aside>
      <div id="profile">
        <img src="/src/assets/img/1.webp" alt="" />
        <p id="logName">Nom</p>
      </div>
      <ul id="menu">
        <li id="dashboardSection">
          <img src="/src/assets/img/app.png" alt="" />
          <p>Dashboard</p>
        </li>
        <li id="userSection">
          <img src="/src/assets/img/user.png" alt="" />
          <p>Users</p>
        </li>
        <li id="groupSection">
          <img src="/src/assets/img/people.png" alt="" />
          <p>Groups</p>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
