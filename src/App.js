import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import React from 'react';



function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
