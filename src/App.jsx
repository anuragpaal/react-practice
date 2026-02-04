import { useCallback, useState } from "react";
import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Child2 = React.memo(({ onClick }) => {
  console.log("Child Rendered 2");
  return <button onClick={onClick}>Click Me 2</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child onClick={handleClick} />

      <Child2 onClick={handleClick} />
    </div>
  );
}

export default App;
