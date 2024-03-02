import React from 'react';
import slide1 from '../../assets/img/slide1.png';
import slide2 from '../../assets/img/slide2.png';

const Slider = () => {
  return (
    <div className='slider-wrapper'>
      <div id='carouselExample' className='carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={slide1} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={slide2} className='d-block w-100' alt='...' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
