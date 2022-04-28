import React from "react";
import { ReactDOM } from "react";
import { Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { About, Login, Profile } from "./pages";
import "./App.css";

function App() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
