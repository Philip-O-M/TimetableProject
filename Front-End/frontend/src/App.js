import Navigation from './components/navigation.jsx';
import Signup from './components/signup.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Lock from "./components/lock.jsx";
import LandingPage from "./components/landingpage.jsx";
import Activate from "./components/Activate.jsx";
import Home from "./components/home.jsx";
import ResetPassword from "./components/resetPassword.jsx";
import Email from "./components/email.jsx";

import{useEffect, useState} from 'react';

function App() {
  const[loggedIn,setLoggedIn]=useState(true);

  const checkForInactivity= () => {

    const expireTime=localStorage.getItem("expireTime");

    if(expireTime<Date.now()){
      console.log("Locked")
      setLoggedIn(false);
    }
  }
const updateExpireTime=()=>{
  const expireTime=Date.now()+20000;
  localStorage.setItem("expireTime",expireTime);
}
useEffect(()=>{
  
  const interval=setInterval(()=>{
    checkForInactivity();
  }, 10000);
  return()=>clearInterval(interval);
}, []);

useEffect(()=>{
  updateExpireTime();

  window.addEventListener("click",updateExpireTime);
  window.addEventListener("keypress",updateExpireTime);
  window.addEventListener("scroll",updateExpireTime);
  window.addEventListener("mousemove",updateExpireTime);

  return()=>{
    window.removeEventListener("click",updateExpireTime);
  window.removeEventListener("keypress",updateExpireTime);
  window.removeEventListener("scroll",updateExpireTime);
  window.removeEventListener("mousemove",updateExpireTime);
  }
}, []);
  return (
    <div >
      
     <BrowserRouter>
     
        <Routes>
        <Route path="/email" element={<Email/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Activate" element={<Activate/>}/>
          <Route path="/LandingPage" element={<LandingPage/>}/>
          <Route path="/Logout" element={<Logout/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<Signup/>}/>
          <Route path="/Lock" element={<Lock/>}/>
        </Routes>
      </BrowserRouter>;
    </div>
  );
}

export default App;
