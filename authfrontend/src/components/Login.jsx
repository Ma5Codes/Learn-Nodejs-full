import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', formData);
            console.log(res.data);
            // Store the token in localStorage or state
            localStorage.setItem('token', res.data.accessToken);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;