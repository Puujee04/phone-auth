import React from "react";
import { Link, Outlet } from "react-router-dom";
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
      <nav>
        <Link to='/home'>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/Profile'}>Profile</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
