import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const { handleBlur, handleSubmit, handleChange, touched, errors, values } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Please provide a valid email')
          .required('email is required'),
        password: Yup.string()
          .min(6, 'Must be 6 characters ormore')
          .required('Password is Required'),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <>
      <Header />
      <div className='login-wrapper'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='lead-text'>
              <h3>LOGIN WITH SOCIAL LINKS</h3>
            </div>
            <p>
              Don't have account? <Link to='/register'>Register</Link>
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
              <div className='col-md-12'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  onChange={handleChange}
                  values={values.email}
                  onBlur={handleBlur}
                  name='email'
                  className='form-control'
                  id='email'
                />
                <p className='error'>
                  {touched.email && errors.email ? errors.email : null}
                </p>
              </div>
              <div className='col-md-12'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  onChange={handleChange}
                  values={values.password}
                  onBlur={handleBlur}
                  name='password'
                  className='form-control'
                  id='password'
                />
                <p className='error'>
                  {touched.password && errors.password ? errors.password : null}
                </p>
              </div>
              <div className='col-12'>
                <button type='submit' className='btn btn-primary'>
                  lOgIN Now
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-6'>
            <div className='lead-text'>
              <h3>NEW CUSTOMER</h3>
            </div>
            <p>
              By creating an account with us, purchasing on our website becomes
              much faster and easier.
            </p>
            <Link to='/register' className='btn btn-outline-danger'>
              NEW CUSTOMER
            </Link>
          </div>
        </div>
        <Footer />
        <div className='lead-text'>
          <h3>LOGIN WITH SOCIAL LINKS</h3>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
