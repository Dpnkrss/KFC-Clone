import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Header />

      <div class='container-fluid'>
        <div class='row'>
          <Nav />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
