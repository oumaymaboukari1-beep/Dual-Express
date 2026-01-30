// src/pages/auth/Login.jsx
import React, { useState } from 'react';
import { login, me } from '../../api/authApi';
import useUserStore from '../../store/userStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const setUser = useUserStore((s) => s.setUser);

    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(form);         // Controller crée la session
            const { data } = await me(); // Controller renvoie le Model (user + roles)
            setUser(data);
            navigate('/');
        } catch (err) {
            setError(err?.response?.data?.message || 'Échec de connexion');
        }
    };

    return (
        <div className="login-container">
            <h2>Connexion</h2>
            <form onSubmit={onSubmit}>
                <input name="username" value={form.username} onChange={onChange} placeholder="Email ou username" />
                <input type="password" name="password" value={form.password} onChange={onChange} placeholder="Mot de passe" />
                <button type="submit">Se connecter</button>
            </form>
            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    );
};

export default Login;