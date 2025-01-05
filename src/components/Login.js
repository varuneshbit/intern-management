import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import logo from '../images/bit-logo-1.png';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';

const BitName = () => {
    return (
        <h1>Bannari Amman Institute of Technology</h1>
    );
};
const TPName = () => {
    return (
        <h2>Training & Placement</h2>
    );
};
const LoginButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Login</button>
    );
};
const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const validEmail = 'admin@gmail.com';
        const validPassword = '123123';

        if (email === validEmail && password === validPassword) {
            setError('');
            onLogin(email, password);
            navigate('/home');
        } else {
            setError('Invalid email or password');
        }
    };
    return (
        <div className='login'>
            <div className='input'>
                <label>Email:</label><br />
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <label>Password:</label><br />
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                {error && <div className='error'>{error}</div>}
                <a href="#">Forgot Password?</a><br />
                <LoginButton onClick={handleLogin} />
                <div className='inLoginSide'>
                    <label>Or Login Using</label>
                    <a href="#"><FcGoogle /></a>
                    {/* <a href="#"><GrLinkedin /></a> */}
                </div>
            </div>
        </div>
    );
};
const LoginForm = ({ onLogin }) => {
    return (
        <div className='login-container'>
            <header>
                <BitName />
                <TPName />
            </header>
            <div className='content-wrapper'>
                <div className='left-tp'>
                    <img src={logo} alt="BITLogo" />
                </div>
                <div className='right-login'>
                    <Login onLogin={onLogin} />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
