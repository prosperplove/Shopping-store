import { Link } from 'react-router-dom'
import niketwo from '../images/niketwo.jpg'
import FAQ from '../Components/FAQ'
import React, { useEffect, useState } from 'react';
 import Swal from 'sweetalert2';
const JoinUs = () => {

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  
 const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    profession: '',
    signedIn:'',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'firstName is required';
    }
     if (!formData.lastName.trim()) {
      newErrors.lastName = 'lastName is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select a gender';
    }

    if (!formData.profession) {
      newErrors.profession = 'Please select a profession';
    }
     if (!formData.signedIn) {
     alert(`Keep me signed in: ${keepSignedIn ? 'Yes' : 'No'}`);
    }
     if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
       Swal.fire({
  title: "success!",
  text: "Registration successful!",
  icon: "success",
  background:"green",
  color:"white",
 
});
    }
  };

  return (
    <div style={{marginTop:"22vh"}}>
      <div className='registration' style={{ textAlign:"center" }}>
        <h1 style={{ margin:"10vh", fontSize:"1.5rem"}}>DA STELLA'S REGISTRATION</h1>
        <p>GET 10% OFF</p>
      </div>
      <div className="form">
         
    <form onSubmit={handleSubmit} style={{ margin: '0 auto'}}>
      {/* Name Input */}

      <div className='box'>
        <label>First name:</label><br/>
        <input
        className='field'
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
      </div>
      
      <div className='box'>
        <label>Last name:</label><br/>
        <input
        className='field'
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
      </div>

      {/* Email Input */}
      <div className='box'>
        <label>Email:</label><br/>
        <input
        className='field'
          type="email"
          placeholder='input your email'
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      {/* Gender Radio Buttons */}
      <div>
        <label>Gender:</label><br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          /> Male
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          /> Female
        </label>
        {errors.gender && <div style={{ color: 'red' }}>{errors.gender}</div>}
      </div>
{/* Password Dropdown */}
 <div className='box'>
        <label>Password:</label>
        <input
        className='field'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span style={{ color: 'red' }}>{errors.password}</span>
        )}
      </div>

      {/* Confirm Password */}
      <div className='box'>
        <label>Confirm Password:</label>
        <input
        className='field'
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
           <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
        )}
      </div>
      {/* Profession Dropdown */}
      <div className='box'>
        <label>Continent:</label><br/>
        <select
        className='field'
          name="profession"
          value={formData.profession}
          onChange={handleChange}
         
        >
          <option value="" disabled>Select Continent</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Australia">Australia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>
        {errors.profession && <div style={{ color: 'red' }}>{errors.profession}</div>}
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: '10px' }}>
        <button type="submit" class="btn btn-dark" style={{  width:"15vh" }}>Register</button>
      </div>
      <div className="box-in">
        <label>
        <input
          type="checkbox"
          name='signedIn'
          checked={formData.signedIn}
          onChange={handleChange}
        />
        Keep me signed in
      </label>
      </div>
      <div className="sign-in">
       <p>Already Have An Account? <Link to="/SignIn"> <span style={{fontWeight:"500", textDecoration:"none"  }}>Sign in</span></Link></p>
      </div>
    </form>
    </div>
    <FAQ/>
    </div>
  );
}

export default JoinUs