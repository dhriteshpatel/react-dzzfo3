import React, { Fragment, useState } from 'react';
import './Login.css';
const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState(null);

  const submitForm = () => {
    if (username !== '' && password !== null) {
      if (password.length < 8) {
        alert('Enter password more then 8 chars');
      }
      var narray = password.split('').filter((char) => typeof char === Number);
      if (narray.length === 0) {
        alert('Password should atleast contain one Number');
      }

      var narray2 = password
        .split('')
        .filter((char) => char.toUpperCase() === char);
      if (narray2.length === 0) {
        alert('Password should atleast one Capital letter');
      }
    }
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="fields">
          <label className="label">UserName</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={() => setUserName(e.target.value)}
            value={username}
          />
        </div>
        <div className="fields">
          <label className="label">Password</label>
          <input
            type="Password"
            placeholder="Enter your name"
            onChange={() => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="fields">
          <button className="mybtn" onClick={submitForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
