import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './userSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Successful response
        }
        else {
          throw new Error('Login failed'); // Error response
        }
      })
      .then((data) => {
        console.log(data);

        // Save the entire user object in Redux state
        dispatch(setUser(data.user[0]));

        // Redirect the user to the profile page after successful login
        navigate('./profile');
      })
      .catch((error) => {
        console.error(error.message);
        console.log("my error"); // Log the error message
      });
  };

  return (
    <div className="login-card">
        <div className='card'>
          <div>
            <p className='inp'>Welcome back! 👋</p>
            <h2 className='inp'>Sign in to your account</h2>
          </div>
          <div className='sec2'>
            <p className='inp'>Your email</p>
              <input className='inp'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className='inp'>Password</p>
              <input className='inp'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='inp btn' onClick={handleLogin}>CONTINUE</button>
          </div>
          <div className='sec3'>
              <p>Forget your password?</p>
          </div>
        </div>
        <div className='next'>
          <p className='nextjs'>Don't have an account? </p>
          <p className='cool'>Sign up</p>
        </div>
    </div>
    
  );
};

export default Login;