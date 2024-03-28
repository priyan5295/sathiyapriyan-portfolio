import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const login = useNavigate()

    const loginClick = () => {
        login('/login');
    }

    return (
        <div>
            <h1>Register Page</h1>
            <button className='btn'>Register</button>
            <p>Already have an account</p>
            <button className='btn' onClick={loginClick}>Login</button>
        </div>
    )
}

export default Register
