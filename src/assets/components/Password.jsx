function Password({ password, setPassword, type }) {
  function pass() {
    let x = document.querySelector(".password");
    let show = (document.getElementById("show") || document.getElementById("lShow"));
    if (x.type === "password") {
      x.type = "text";
      show.src = "./src/assets/img/eye.svg";
    } else {
      x.type = "password";
      show.src = "./src/assets/img/eye-slash.svg";
    }
  }

  return (
    <div id={type ? "on" : "passBox"}>
      <input
        className="password"
        type="password"
        placeholder="Password"
        value={password}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <img
        id={type ? "show" : "lShow"}
        onClick={pass}
        src="./src/assets/img/eye-slash.svg"
        alt=""
      />
    </div>
  );
}

export default Password;

{/* <Password password={password} setPassword={setPassword} type={true} /> */}
