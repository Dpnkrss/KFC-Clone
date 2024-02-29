import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import product1 from '../../assets/img/product1.png';

const ProductDetail = () => {
  return (
    <div className='product-detail-wrapper'>
      <Header />
      <div className='p-detail-inner pt-5'>
        <div className='row'>
          <div className='col-md-5'>
            <img src={product1} alt='' />
          </div>
          <div className='col-md-7'>
            <h3>Product Tilte</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              incidunt aliquid ut sunt harum culpa magni exercitationem itaque
              quam similique repudiandae sint, atque tempore esse id odio
              quisquam rem illum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
