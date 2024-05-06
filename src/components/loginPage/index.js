import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


function LoginPage() {

  const [userName, SetUserName] = useState('')
  const [password, SetPassword] = useState('')
  const [email, SetEmail] = useState('')

  const onchangeUserNameFunction = event => {
    SetUserName(event.target.value)
    console.log(event.target.value)
  }

  const onchangeEmailFunction = event => {
    SetEmail(event.target.value)
    console.log(event.target.value)
  }

  const onchangePasswordFunction = event => {
    SetPassword(event.target.value)
    console.log(event.target.value)
  }


  const onSubmitFunction = event => {
    event.preventDefault()
    const data = {
      email: email,
      password: password,
      username: userName,
    }
    console.log(data)

  }



  return (
    <div className="container">
    <form action="#" method="POST" class="register-form">
      <h2>Login</h2>
      <div className="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value = {userName} required onChange={onchangeUserNameFunction} />
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value = {email} required onChange={onchangeEmailFunction} />
      </div>
      <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value = {password} required onChange={onchangePasswordFunction} required />
      </div>
      <button type="submit" onClick={onSubmitFunction} >Login</button>
      <Link to='/signup' ><button >Sign up</button></Link>
      
    </form>
    
  </div>
  );
}

export default LoginPage;
