
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  },[]);

   const handalSubmit = (e) =>{
    e.preventDefault();
   }
  return (
    <div className="App">
      <form onSubmit={handalSubmit}>
        <input type="text" name='name' placeholder='User Name'/>
        <br />
        <input type="email" name="email" id="" placeholder='User Email'/>
        <br />
        <button type="submit">Add User</button>
      </form>
      <h2>Users: {users.length}</h2>
      <div>
        {
          users.map(user=> <p key={user.id}>{user.name}  {user.email}</p>)
        }
      </div>
    </div>
  );
}

export default App;
