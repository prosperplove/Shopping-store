import React, { useState } from 'react';
 import { Link } from 'react-router-dom'
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // Clear error on input change
    setIsValid(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Clear error on input change
    setIsValid(validateEmail(email) && validatePassword(e.target.value));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(validateEmail(email) ? '' : 'Invalid email format.');
    setPasswordError(validatePassword(password) ? '' : 'Password must be at least 8 characters long.');
    setIsValid(validateEmail(email) && validatePassword(password));
    
    if(isValid){
        // Perform login logic here (e.g., API call)
        console.log('Login successful:', {email, password});
        // Clear form after successful submission
        setEmail('');
        setPassword('');
        }
  };

  const validateEmail = (email) => {
    // Basic email validation (can be improved)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Password validation (minimum length)
    return password.length >= 8;

   
  };
  

  return (
     <div style={{marginTop:"20vh"}}>
    
       <div className='registration-form'>
        <h1 style={{ textAlign:"center", margin:"10vh", fontSize:"1.5rem"}}>Login account</h1>
      </div>
       <div className="form">
         
    <form onSubmit={handleSubmit}>
      
      <div className='box'>
        <label htmlFor="email">Email:</label>
        <input
        className='field'
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div className='box'>
        <label htmlFor="password">Password:</label>
        <input
        className='field'
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <button type="submit" disabled={!isValid} class="btn btn-dark" style={{ margin:'2vh', width:"15vh"}}>
        Login</button>  {/* Disable if invalid */}
         <div>
            <p>Don't have an Account? <Link to="/JoinUs"  style={{fontWeight:"500",  textDecoration:"none"}}><span>Create</span></Link></p>
        </div>
        </form>
       
    </div>
    </div>
  );
}

export default SignIn
