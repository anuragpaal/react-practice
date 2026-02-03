function User(props) {
  return (
    <div>
      <h3>User name : {props.name}</h3>
      <p>User age : {props.age}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <ul>User List</ul>
      <li>
        <User name="Anurag Pal" age={38} />
        <User name="Pragya Pal" age={29} />
      </li>
    </div>
  );
}

export default App;
