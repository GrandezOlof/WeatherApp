import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
    <Navbar/>
      <div className="center container">
        <Container/>
      </div>
    </div>
  );
}

export default App;
