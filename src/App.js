// import React from 'react';
// import logo from './logo.svg';

// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link,
// } from 'react-router-dom';

function App() {
  const [mode , setMode] = useState("light");
  



  // it change backgound color but not change button color work on it     
  const [oldColor , newColor] = useState('white');
  const changeColor = (event)=>{
      if(event.target.classList.contains('light-green')){
        newColor("#006400");
        console.log('this is light green porperty')
        document.body.style.backgroundColor = "#006400";
      }
      else if(event.target.classList.contains('light-red')){
        newColor("#DC143C");
        document.body.style.backgroundColor = "#DC143C"
      }
      else if(event.target.classList.contains('orange')){
        newColor('#008B8B');
        document.body.style.backgroundColor = '#008B8B'
      }
      else if(event.target.classList.contains('yellow')){
        newColor('#8B0000');
        document.body.style.backgroundColor = '#8B0000'
      }
  }








  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743";
      showAlert('Dark mode has been enable','success');
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enable','success');
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router>
      <Navbar title="TextUtils"  mode={mode} toggleMode = {toggleMode} changeColor={changeColor}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/" element={<TextForm heading='Enter a text to analyze below' oldColor={oldColor} mode={mode} upperAlert={showAlert}/>}></Route>
        </Routes>
        </div>
    </Router> */}
    <Navbar title="TextUtils"  mode={mode} toggleMode = {toggleMode} changeColor={changeColor}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <TextForm heading='Enter a text to analyze below' oldColor={oldColor} mode={mode} upperAlert={showAlert}/>
    </div>
    </>
  )
}

export default App;
