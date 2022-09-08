// import React from 'react';
// import logo from './logo.svg';

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3"><TextForm heading='Enter a text to analyze below'/></div>
    </>
  )
}

export default App;
