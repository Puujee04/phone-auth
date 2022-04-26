import { useState } from 'react';
import {auth} from './firebase/firebase'
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import './App.css';

function App() {
  const countryCode = '+976';
  const [expandForm, setExpandForm] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [inputValue, setInputValue] = useState('');
  // const auth = getAuth();
  const onSignInSubmit = ()=> {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
  }
 
  window.recaptchaVerifier = new RecaptchaVerifier('login-btn', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log(response);
      onSignInSubmit();
    }
  }, auth);
  const changedInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  }
  
  const requestOTP  = () => {
    
      setExpandForm(false);
      console.log(`login=`, inputValue);
  }
  const requestDTP  = () => {
    setExpandForm(true);
    console.log(`submit`);
}
  return (
    <div className="App">
      { expandForm ? <div className='field'>
        <h3>Phone Number:</h3>
        <input type={'number'} className={'phone-input'} onChange={changedInputValue} ></input>
        <br></br>
        <button id='login-btn' onClick={requestOTP}>Login</button>
      </div> 
      :  
      <div className='field'>
        <h3>verication code:</h3>
        <input type={'number'} className={'verication-input'}></input>
        <br></br>
        <button id='submit-btn' onClick={requestDTP}>submit</button>
      </div>}
    </div>
  );
}

export default App;
