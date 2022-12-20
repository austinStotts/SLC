import { useRouter } from 'next/router'
import axios from "axios"
import { Component, useState } from 'react';





export default function signup (props) {

  // const router = useRouter();
  // // console.log(router.query)

  // const handle_signup = () => {
  //   let username = document.getElementById("username");
  //   let password = document.getElementById("password");
  //   axios.post(`http://localhost:3333/signup?username=${username.value}&password=${password.value}`)
  //   .then(response => {
  //     document.getElementById("helper").textContent = "";
  //     router.push("/")
  //     //redrect back to home page
  //   }).catch(err => { 
  //     console.log(err);
  //     document.getElementById("helper").textContent = "error signing up"
  //   })
  // }

  // return (
  //   <div>
  //       <input id='username' className='input-signup' type={"text"} placeholder={"username"}></input>
  //       <input id='password' className='input-signup' type={"text"} placeholder={"password"}></input>
  //       <button className='signup-button' onClick={handle_signup}>submit</button>
  //       <p id='helper' className='helper'></p>
  //   </div>
  // )
  
}