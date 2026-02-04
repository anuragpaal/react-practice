import { useState } from "react";


function App() {
  const [name,setName] = useState("");
  const [age,setAge] = useState("");

  const handleReset = () => {
    setName("")
    setAge("")
  }

  return (
    <div>
      <h1>Deom Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>

      <input 
        type="text"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <h4>Age : {age}</h4>

      <button onClick={handleReset}>
        Reset
      </button>

      <button onClick={() => alert(name)}>
        Submit
      </button>
    </div>
  )
}


export default App;