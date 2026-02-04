import { useEffect,useState } from "react";


function App() {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])

    return (
      <div>
        <h1>Users List</h1>

        {users.length === 0 ? 
        (<p>Loading ...</p>) :

        (users.map(user => (
          <div key={user.id} style={{border : "1px solid black", margin: "10px", padding : "10px"}}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        )))
      }
      </div>
    )
}

export default App;