import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
function UserMemory({ user, usersData }) {
  const [memory, setMemory] = useState({});

  // Object to convert the unit to bytes
  const conversion = { G: 1, M: 0.001, K: 0.000001, B: 0.000000001 };

  // Function to convert the string value to a number
  function getValues(stringValue) {
    const unit = stringValue.match(/[^\d.]/)?.[0];
    return parseFloat(stringValue.replace(unit, "")) * conversion[unit];
  }

  return( <div className="cart" id={user}>
    <h2>{user}</h2>
    <Doughnut
    
    />
  </div>)
}
