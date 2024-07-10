import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  async function out() {
    let response = await fetch("http://localhost:800/logout.php");
    let data = await response.text();
    console.log(data);
    handleNavigation();
  }

  const handleNavigation = () => {
    // Change the route to /about
    navigate("/login");
  };

  return <button onClick={out}>Logout</button>;
}

export default Logout;
