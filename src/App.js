// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import React, { useState } from 'react'
import Alert from './component/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light')//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)//You will see an alert message when you click the button or dark,light mode

  //showAlert decide message and type of alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    //this method is show how much time show alert message
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#042743'

      //showAlert => alert message when you will click dark-mode
      showAlert('Dark mode has been enabled', 'success')

      //below line change the title on click dark-mode
      // document.title = 'Dark Mode Enabled'


      //this code is blink the title when you click dark mode
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing mode'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'

      //showAlert => alert message when you will click light-mode
      showAlert('Light mode has been enabled', 'success')

      //below line change the title on click light-mode
      // document.title = 'Light Mode Enabled'


    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Character Count" mode={mode} toggleMode={toggleMode} />
        {/* pass the alert state to Alert.js */}
        <Alert alert={alert} />
        <div className="container  my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* pass the showAlert to TextForm.js */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading='Enter the text to analyze below' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


