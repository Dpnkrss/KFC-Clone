import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

const Product = () => {
  return (
    <div className='product-wrapper'>
      <Header />
      <div className='lead-text'>
        <h3>SIGNATURE BOXES</h3>
      </div>
      <div className='product-iner pt-5'>
        <div className='row'>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
          <div className='col-md-4 mb-5'>
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
