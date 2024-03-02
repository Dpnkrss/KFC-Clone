import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
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

            <form className='row g-3 '>
              <div className='col-md-12'>
                <label htmlFor='inputEmail4' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' id='inputEmail4' />
              </div>
              <div className='col-md-12'>
                <label htmlFor='inputPassword4' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword4'
                />
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