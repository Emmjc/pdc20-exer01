import React, { useState } from 'react';
import AdminPanel from "./AdminPanel";
import './LogAdmin.css';
function LogAdmin() {
    // Correctly destructure state values and setters
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('user');
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        const isAdmin = accountType === 'admin';
        setUser({ name: username, isAdmin });
    }

    return (
        <div className="login-container">
            {user ? (
                <AdminPanel user={user} />
            ) : (
                <div className="login-form">
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlfor="accountType">Account Type:</label>
                        <select 
                            value={accountType} 
                            onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="form-actions">
                    <button onClick={handleLogin}>Login</button>
                    <button>Signup</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LogAdmin;
