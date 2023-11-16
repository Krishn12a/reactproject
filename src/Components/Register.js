import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    gender: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Add validation
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let newErrors = { ...errors };

    switch (fieldName) {
      case 'name':
        newErrors.name = value.length < 1 ? 'Name is required.' : '';
        break;
      case 'email':
        newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Invalid email address.';
        break;
      case 'password':
        // Password validation criteria
        newErrors.password = '';
        if (
          value.length < 8 ||
          value.length > 16 ||
          !/[a-z]/.test(value) ||
          !/[A-Z]/.test(value) ||
          !/[!@#$%^&*(),.?":{}|<>]/.test(value) ||
          /\s/.test(value)
        ) {
          newErrors.password =
            'At least one lowercase letter, At least one uppercase letter, At least one special character, No spaces allowed, Minimum 8 and maximum 16 characters';
        }
        break;
      case 'mobile':
        newErrors.mobile = /^\d{10}$/.test(value)
          ? ''
          : 'Mobile number must be 10 digits.';
        break;
      // Add validation for other fields if needed
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if there are no errors
    if (Object.values(errors).every((error) => error === '')) {
      // Make your API call or other actions here
      axios
        .post('http://localhost:8888/login', formData)
        .then(() => {
          window.alert('Customer added Successfully');
        })
        .catch((err) => {});
    } else {
      console.log('Form has errors. Cannot submit.');
    }
  };

  return (
    <div className='con'>
      
        <div className="container col-lg-5 cont1" style={{backgroundColor:"aqua"}} >
        <div className=" ">
          <h1 style={{ textAlign: 'center' }}>Register</h1>
          
            <form className=" mx-auto container" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your Name"
                />
                <div className="text-danger">{errors.name}</div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your Email"
                />
                <div className="text-danger">{errors.email}</div>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your Password"
                />
                <div className="text-danger">{errors.password}</div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your Mobile Number"
                />
                <div className="text-danger">{errors.mobile}</div>
              </div>
              <div className="mb-3" onChange={handleChange}>
                <textarea
                  name="address"
                  id="address"
                  rows="3"
                  cols="49"
                  className="form-control"
                  placeholder="Enter your Address"
                ></textarea>
                <div className="text-danger"></div>
              </div>
              <div className="mb-3" onChange={handleChange}>
                <input
                  type="radio"
                  id="genderMale"
                  name="gender"
                  value="M"
                />
                Male &nbsp;&nbsp;
                <input
                  type="radio"
                  id="genderFemale"
                  name="gender"
                  value="F"
                />
                Female &nbsp;&nbsp;
                <input
                  type="radio"
                  id="genderTrans"
                  name="gender"
                  value="T"
                />
                Transgender
                <div className="text-danger"></div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn btn-success mt-2" disabled={true}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default Register;
