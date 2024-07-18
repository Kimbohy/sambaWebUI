import Aside from "./Aside";
import Main from "./Main";
import "../styles/Page.css";
import Popup from "./Popup";
import { useState } from "react";

function AdminPage() {
  const [page, setPage] = useState("dashboard");
  const changPage = (newPage) => {
    setPage(newPage);
  };
  return (
    <div id="container">
      <Aside changPage={changPage} />
      <Main page={page} />
      {localStorage.getItem("message") &&
      localStorage.getItem("message") !== "" ? (
        <Popup
          data={{
            title: "Message",
            body: localStorage.getItem("message"),
            closePopup: () => localStorage.setItem("message", ""),
          }}
        />
      ) : null}
    </div>
  );
}

export default AdminPage;
