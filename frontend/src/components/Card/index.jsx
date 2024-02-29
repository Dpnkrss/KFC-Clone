import React from 'react';
import product1 from '../../assets/img/product1.png';
import './card.css';

const Card = () => {
  return (
    <div className='card-wrapper'>
      <div class='card'>
        <img src={product1} class='card-img-top' alt='product1' />
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className='btn-wrapper d-flex'>
            <button
              type='button'
              className='btn btn-outline-danger btn-wrapper'
            >
              CAD $ 4.6
            </button>
            <button type='button' className='btn btn-danger  btn-wrapper'>
              Add to Bucket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
