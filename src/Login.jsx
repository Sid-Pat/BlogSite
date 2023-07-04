import React from 'react'
import { useEffect } from 'react';
import {auth,provider} from "./firebase-config";
import { signInWithPopup,signInWithRedirect,getRedirectResult } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {
    let navigate = useNavigate();

    // const signInWithGoogle = () => {
    //     signInWithPopup(auth,provider).then((result)=>{
    //         localStorage.setItem("isAuth",true);
    //         setIsAuth(true);
    //         navigate("/");
    //     });
    // };
    
    useEffect( () =>{
        async function f(){
            const response = await getRedirectResult(auth);
            if(response){
                // console.log(response);
                localStorage.setItem("isAuth",true);
                setIsAuth(true);
                navigate("/");
            }
        }
        f();
    },[]);
    

    const signInWithGoogle = async () => {
        await signInWithRedirect(auth,provider)
    }    

  return (
    <div className='loginPage'>
        <p>Sign In With Google to Continue</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>
  )
}

export default Login
