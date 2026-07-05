import React from 'react';

const users = [{ id: 1, name: 'Alice', role: 'developer' },

{ id: 2, name: 'Bob', role: 'designer' },

{ id: 3, name: 'Carol', role: 'developer' },

{ id: 4, name: 'Dave', role: 'manager' }]

function UserDirectory() {

    const developers = users.filter(user => user.role === 'developer');


    return (
        <div>
            <h1>User Directory</h1>
            <ul>
                {developers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}


export default UserDirectory;
