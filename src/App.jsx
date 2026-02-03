import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect Loaded");
    document.title = "Count: " + count; 
  }, [count]);

  return (
    <div>
      <h1>UseEffect Demo</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
