import { useEffect, useRef, useState } from "react";
import { auth } from "./firebase/firebase-config";
import {RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./App.css";

function App() {
  // const countryCode = "+976";
  const [expandForm, setExpandForm] = useState(true);
  const [inputValue, setInputValue] = useState("");
  let phoneNumber = `+976`
  const recaptchaVerifier = useRef();
  const confirmationResulta = useRef();

  
  useEffect(()=>{
    recaptchaVerifier.current = new RecaptchaVerifier('login-btn', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);
  },[])
  

  const onSignInSubmit = () => {
    console.log('onsigninsubmit')
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      confirmationResulta.current = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

  };

  const changedInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const requestOTP = () => {
    setExpandForm(false);
    setInputValue('');
    phoneNumber = phoneNumber + inputValue;
    // setPhoneNumber()
    console.log(`login=`, inputValue);
  };
  const verifyOTP = () => {
    setExpandForm(true);
    confirmationResulta.confirm(inputValue).then((result) => {
      // User signed in successfully.
      const user = result.user;
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
    console.log(`submit`);
  };
  return (
    <div className="App">
      {expandForm ? (
        <div className="field">
          <h3>Phone Number:</h3>
          <input
            type={"number"}
            className={"phone-input"}
            onChange={changedInputValue}
            value={inputValue}
          ></input>
          <br></br>
          <button id="login-btn" onClick={requestOTP}>
            Login
          </button>
        </div>
      ) : (
        <div className="field">
          <h3>verication code:</h3>
          <input
            type={"number"}
            className={"verication-input"}
            onChange={changedInputValue}
            value={inputValue}
          ></input>
          <br></br>
          <button id="submit-btn" onClick={verifyOTP}>
            submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
