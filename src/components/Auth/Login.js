import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const register = useNavigate();

    const registerClick = () => {
        register('/register');
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button className='btn'>Login</button>
            <p>Dont have an account</p>
            <button className='btn' onClick={registerClick}>Register</button>
        </div>
    )
}

export default Login
