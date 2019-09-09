import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Container from './components/Container'

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
