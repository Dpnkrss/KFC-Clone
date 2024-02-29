import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Header />
      <Slider />
      <div className='lead-text'>
        <h3>SIGNATURE BOXES</h3>
      </div>
      <div className='row '>
        <div className='col-md-4'>
          <Card />
        </div>

        <div className='col-md-4'>
          <Card />
        </div>

        <div className='col-md-4'>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
