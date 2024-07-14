import { useEffect, useState } from "react";
function UserNumber(users) {
  const [userNumber, setUserNumber] = useState(0);

  useEffect(() => {
    setUserNumber(users.users.length);
  }, []);

  return (
    <div className="cart">
      <h2 className="title">Users</h2>
      <p className="value">{userNumber}</p>
    </div>
  );
}

export default UserNumber;
