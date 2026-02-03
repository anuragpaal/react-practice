import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter App</h1>

            <h2 style={{ color : count > 5 ? "red" : "green" }}>{count}</h2>

            <button onClick={() => {
                if(count < 10){
                    setCount(count + 1)
                }
            }}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>


            <button onClick={() => setCount(count + 5)}>
                +5
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    )
}

export default App;