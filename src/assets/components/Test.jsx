import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../img/LoadingAnimation1.json';

function Test() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMyData().then((fetchedData) => {
      setData(fetchedData);
      setIsLoading(false); // Set isLoading to false after data is fetched
    });
  }, []);
  
  // Define loadingOptions outside the conditional rendering
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (isLoading) {
    // Return the loading animation when isLoading is true
    return (
      <div>
        <Lottie options={loadingOptions} height={200} width={200} />
      </div>
    );
  }
  
  // Render the content when isLoading is false
  return (
    <div>
      {/* Your content here */}
      <div>
        <h1>Données chargées</h1>
        <p>{data}</p>
      </div>
    </div>
  );
}

async function fetchMyData() {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "Données chargées";
}

export default Test;
