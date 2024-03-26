import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
