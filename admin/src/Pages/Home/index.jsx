import React from 'react';

import Nav from '../../components/Nav';
import Main from '../../components/Main';

const Home = () => {
  return (
    <>
      <div class='container-fluid'>
        <div class='row'>
          <Nav />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
