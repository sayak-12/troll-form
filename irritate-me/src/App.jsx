import "./App.css";
import { useState, useEffect } from 'react';
import EmailComponent from "./components/EmailComponent";
import MobileComponent from "./components/MobileComponent";
import NameComponent from "./components/NameComponent";
import PasswordComponent from "./components/PasswordComponent";
import axios from "axios";

function App() {
  const [err, setErr] = useState(null)
  const submithandler = (e)=>{
    e.preventDefault();
    var name = document.querySelector('.nameip').value;
    var password = document.getElementById('password').value;
    var mobile = document.getElementById('slider').value;
    var email = document.getElementById('text').value;
    if (name == ""||password == ""||mobile ==""||email == "") {
      setErr("Fill out all fields")
    }
    else{
      setErr(null);
      console.log(name, password, mobile, email);
      axios.post("http://localhost:3000/submit", {name, password, mobile, email}).then((data)=>{
        console.log(data.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  useEffect(
    ()=>{
      axios.get("http://localhost:3000/")
      .then((data)=>{
        console.log(data.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }, []
  )
  return (
    <>
      <h2>Fill up this form, xD</h2>
      <form action="" onSubmit={submithandler}>
        <div className="ins">Enter your name: </div>
        <NameComponent />
        <div className="ins">Enter Password: </div>
        <PasswordComponent/>
        <div className="ins">Enter Mobile Number: </div>
        <MobileComponent/>
        <div className="ins">Enter Email: </div>
        <EmailComponent/>
        <button type="submit">Submit Data</button>
        {err && <div className="error">{err}</div>}
      </form>
    </>
  );
}

export default App;
