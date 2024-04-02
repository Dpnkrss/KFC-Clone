import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Order from './Pages/Orders';
import Product from './Pages/Product';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div class='container-fluid'>
          <div class='row'>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/products' element={<Product />} />
              <Route path='/orders' element={<Order />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
