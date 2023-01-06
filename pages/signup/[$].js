import { useRouter } from 'next/router'
import axios from "axios"
import { Component, useState } from 'react';





export default function Signup (props) {

  const router = useRouter();
  // console.log(router.query)

  const handle_signup = () => {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    axios.post(`http://localhost:3333/signup?username=${username.value}&password=${password.value}`)
    .then(response => {
      document.getElementById("helper").textContent = "";
      router.push("/")
      console.log(response.data)
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("token", response.data.token);
      //redrect back to home page
    }).catch(err => { 
      console.log(err);
      document.getElementById("helper").textContent = "error signing up"
    })
  }

  let change_view = () => {
    console.log("switch to signup");
  }

  return (
    // <div>
    //   <div className='s-input-wrapper'>
    //     <input id='username' className='input-signup' type={"text"} placeholder={"username"}></input>
    //     <input id='password' className='input-signup' type={"text"} placeholder={"password"}></input>
    //   </div>
    //   <div className='s-controlls-wrapper'></div>
    //     <button className='signup-button' onClick={handle_signup}>submit</button>
    //     <p id='helper' className='helper'></p>
    // </div>
    // aloghasgasg
    <div className="login-wrapper">
      <div className="input-wrapper">
          <input id="username" className="username" type="text" placeholder="username"></input>
          <div></div>
          <input className="password" type="text" placeholder="password"></input>
      </div>
      <div className="control-wrapper">
        <button className="login-button" onClick={handle_signup}>login</button>
        <div></div>
        <p className="signup-text" onClick={change_view}>make an account?</p>
        <div></div>
      </div>
    </div>
  )
  
}