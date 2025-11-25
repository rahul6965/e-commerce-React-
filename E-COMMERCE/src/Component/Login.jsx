import React, { useState } from "react";
import { useAuth } from "../Context/Authcontent";
import { handleLoginUser } from './../utlit/api';


export default function SimpleLogin() {
   

 const {login} = useAuth();


  // const [email, setEmail] = useState("");
  const [fromdata, setformdata] = useState({
    email : '',
    password : ''
  });



const handleChange = (e) => {
    setformdata((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async(e) => {


    e?.preventDefault();
    try{
      const response = await handleLoginUser(fromdata);
      if(response?.status){
        login(response?.data)
      } else(response?.error)
      {
        console.log("error", response?.error)
      }
    }catch(e){
      console.log("E", e)
    }
    // console.log("name", fromdata.name);
   
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f7f7f7" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", width: "300px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
       <div style={{ marginBottom: "15px" }}>
          <label>email:</label>
          <input
            type="text"
            name="email" 
            value={fromdata?.email}
            onChange={(i) => handleChange(i)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password" 
            value={fromdata?.password}
              onChange={(i) => handleChange(i)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        

        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Login
        </button>
      </form>
    </div>
  );
}