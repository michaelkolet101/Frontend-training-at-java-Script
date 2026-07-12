import React, { useState, useEffect } from 'react';


function UserFetcher() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } 
    catch (error)
     {
      setError(error.message);
    } 
    finally {
      setLoading(false)
    }
  }

  fetchUsers()
}, [])

if (loading) return <p>Loading...</p>

return (<div>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
</div>)
}

export default UserFetcher;