import React from "react";
import { ReactDOM } from "react";
import { Routes, Route, Link} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { About, Login, Profile, Home } from "./pages";
import "./App.css";

function App() {
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
