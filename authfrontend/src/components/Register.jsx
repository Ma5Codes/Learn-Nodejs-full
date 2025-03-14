import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    });

    const { username, email, password, role } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/register', formData);
            console.log(res.data);
        } catch (err) {
            if (err.response && err.response.data) {
                console.error(err.response.data);
            } else {
                console.error('An error occurred:', err.message);
            }
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;