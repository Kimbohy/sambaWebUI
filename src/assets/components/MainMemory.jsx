import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function MainMemory() {
  const [memory, setMemory] = useState({});

  // Object to convert the unit to bytes
  const conversion = { G: 1, M: 0.001, K: 0.000001, B: 0.000000001 };

  // Function to convert the string value to a number
  function getValues(stringValue) {
    const unit = stringValue.match(/[^\d.]/)?.[0];
    return parseFloat(stringValue.replace(unit, "")) * conversion[unit];
  }

  useEffect(() => {
    fetch("http://localhost:800/memory.php")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        data.freeValue = getValues(data.free);
        data.usedValue = getValues(data.total) - data.freeValue;
        setMemory(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
    }, []);
    
    // Default values as a fallback
    const defaultMemory = { usedValue: 0, freeValue: 0, total: "0 GB" };
    const safeMemory = memory || defaultMemory;

  // Debugging
  console.log("Memory object:", memory);

  return (
    <div className="cart" id="totalMemory">
      <h2 className="title">Memory</h2>
      <Doughnut
        data={{
          labels: [
            `Used (${memory.usedValue ? memory.usedValue.toFixed(2):'??'}Go)`,
            `Free (${memory.freeValue ? memory.freeValue.toFixed(2):'??'}Go)`,
          ],
          datasets: [
            {
              data: [safeMemory.usedValue, safeMemory.freeValue],
              backgroundColor: ["#E6E9F0", "#00C851"],
              borderWidth: 2,
              cutout: "40%",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "right" },
            title: {
              display: true,
              text: `${safeMemory.usedValue} of ${safeMemory.total}`,
              font: { size: 16, weight: "bold" },
            },
          },
        }}
        className="doughnut"
      />
    </div>
  );
}

export default MainMemory;
