import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar';
import Data from './components/data/Data';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero/>
      <Data></Data>
    </>
  );
}

export default App;
