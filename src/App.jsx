import { useMemo, useState } from "react";

function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState("");

  const calulation = useMemo(() => {
    console.log("..Calculating");

    let total = 0;
    for(let i = 0; i < 1e8; i++) {
      total += i;
    }

    return count * 2;
  },[count])

  return (
    <div>
      <h1>{calulation}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <br /> <br />

      <input 
        type="text"
        placeholder="Text here.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default App;