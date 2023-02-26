import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
 










function App() {
  const [mode,setMode]= useState('light');

  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg : message,
    type : type
  }

  )
  setTimeout(() => {
    setAlert(null);
      
     },3000)
    
}



  const toggleMode=()=>{

    if(mode=='light')
{setMode('dark');
document.body.style.backgroundColor="rgb(2 25 31)";
showAlert("Dark Mode Enabled","success")

}
else{

  setMode ('light');
  document.body.style.backgroundColor="#b2bec3";
  showAlert("Light Mode Enabled","success")
}

  }


  return (
    <>

      <Navbar title="TextUtils" mode= {mode} toggleMode={toggleMode}/>
      
      <Alert alert={alert}/>
      <div className='container'>   
      <TextForm showAlert={showAlert} heading="Enter your text to analyse below "  mode= {mode} />


       <About/>
      </div>



   
    </>
  );
  

  }

export default App;
