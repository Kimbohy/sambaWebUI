import Aside from "./Aside";
import Main from "./Main";
import "../styles/Page.css";
import Popup from "./Popup";

function AdminPage() {
  return (
    <div id="container">
      <Aside />
      <Main />
      {localStorage.getItem("message") && localStorage.getItem("message") !== "" ? <Popup data={{ title: "Message", body: localStorage.getItem("message"), closePopup: () => localStorage.setItem("message", "") }} /> : null}
    </div>
  );
}

export default AdminPage;
