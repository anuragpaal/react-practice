import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>User Search App</h1>

      {loading ? <p>Loading...</p> : ""}

      <input
        type="text"
        placeholder="Search User By Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>No data found</p>
      ) : (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
