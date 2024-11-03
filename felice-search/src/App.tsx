import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cse.google.com/cse.js?cx=c503d0015fc814ee6";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
        <div className="gcse-searchbox"></div>
        <div className="gcse-searchresults"></div>
        </div>
  );
}

export default App;
