import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const {
    handleSubmit,
    handleChange,
    handleReset,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Last Name Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters ormore')
        .required('Password is Required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zip: Yup.string().required('Zip is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Header />

      <div className='lead-text'>
        <h3>NEW CUSTOMER</h3>
      </div>

      <div className='register-wrapper '>
        <p>
          Already Registered? <Link to='/login'>Login</Link>
        </p>
        <hr />
        <button className='btn btn-danger d-block w-100 mb-2'>
          Login with Google
        </button>
        <button className='btn btn-primary d-block w-100'>
          Login with facebook
        </button>
        <hr />

        <form className='row g-3 ' onSubmit={handleSubmit}>
          <div className='col-md-6'>
            <label htmlFor='firstName' className='form-label'>
              Fitst Name
            </label>
            <input
              type='text'
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
              name='firstName'
              className='form-control'
              id='firstName'
            />
            <p className='error'>{errors.firstName}</p>
          </div>
          <div className='col-md-6'>
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <input
              type='text'
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
              name='lastName'
              className='form-control'
              id='lastName'
            />
            <p className='error'>{errors.lastName}</p>
          </div>
          <div className='col-md-6'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              name='email'
              className='form-control'
              id='email'
            />
            <p className='error'>{errors.email}</p>
          </div>
          <div className='col-md-6'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              name='password'
              className='form-control'
              id='password'
            />
            <p className='error'>{errors.password}</p>
          </div>
          <div className='col-12'>
            <label htmlFor='address' className='form-label'>
              Address
            </label>
            <input
              type='text'
              onChange={handleChange}
              value={values.address}
              onBlur={handleBlur}
              name='address'
              className='form-control'
              id='address'
              placeholder='1234 Main St'
            />
            <p className='error'>{errors.address}</p>
          </div>

          <div className='col-md-6'>
            <label htmlFor='city' className='form-label'>
              City
            </label>
            <input
              type='text'
              onChange={handleChange}
              value={values.city}
              onBlur={handleBlur}
              name='city'
              className='form-control'
              id='city'
            />
            <p className='error'>{errors.city}</p>
          </div>
          <div className='col-md-4'>
            <label htmlFor='state' className='form-label'>
              State
            </label>
            <select
              id='state'
              onChange={handleChange}
              value={values.state}
              onBlur={handleBlur}
              name='state'
              className='form-select'
            >
              <option>Choose...</option>
              <option>Alberta</option>
              <option>Qubec</option>
              <option>British Columbia</option>
              <option>Otwa</option>
            </select>
            <p className='error'>{errors.state}</p>
          </div>
          <div className='col-md-2'>
            <label htmlFor='zip' className='form-label'>
              Zip
            </label>
            <input
              type='text'
              onChange={handleChange}
              value={values.zip}
              onBlur={handleBlur}
              name='zip'
              className='form-control'
              id='zip'
            />
            <p className='error'>{errors.zip}</p>
          </div>
          <div className='col-12'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='gridCheck'
              />
              <label className='form-check-label' htmlFor='gridCheck'>
                Check me out
              </label>
            </div>
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary'>
              Register Now
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
