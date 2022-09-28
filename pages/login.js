import React, { useState,useEffect } from 'react'
import {useRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'

 const Login = () => {
   const router = useRouter();
   useEffect(() => {
    if (localStorage.getItem( "assessment")) {
     router.push("/addblog")
    }
  }, []);
    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");
    console.log(username,password);
    const handleClick = async(e)=>{
        e.preventDefault(); 
        try {
            const data = {username,password}
            const res = await fetch('https://assessment-ny3b-f358af8nt-michealajit.vercel.app/api/user', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username,password})
            })
            console.log(res);

            if(res.status===200){
               
       
                    localStorage.setItem(
                     "assessment",
                      JSON.stringify({username,password})
                    );
                   router.push("/addblog");
                  
                
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div  style={{
        height: "100vh",
        width:"50vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <input style={{ padding: 20, marginBottom: 20 , borderStyle: "solid",
  borderWidth: 0.5}} name="username" type='text' onChange={e=>setUsername(e.target.value) } placeholder='Username' />
        <input style={{ padding: 20, marginBottom: 20 , borderStyle: "solid",
  borderWidth: 0.5}} type='password' name='password' onChange={e=>setPassword(e.target.value)} placeholder='Password' />
        <button style={{ padding: 10, width:100 ,borderStyle:"solid",borderWidth:0.5}} onClick={handleClick}>LOGIN</button>
    </div>
  )
}

export default Login;