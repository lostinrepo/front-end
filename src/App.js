import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API when the component mounts
        axios.get('http://localhost:8080/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className="App">
            <header className="App-header">
                <h1>User List</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.username} - {user.email}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
