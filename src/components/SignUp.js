import React from 'react'
import '../styles/SignUp.css'
import { useState,useEffect } from 'react';
import {gapi} from 'gapi-script';
import {GoogleLogin} from 'react-google-login';
import {FcGoogle} from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const clientId="224768829691-84danqbke2s03rh99oql5jh3lqh0bp44.apps.googleusercontent.com"; 

function SignUp() {

    const [email,setEmail] = useState(''); 
    const [password,setPassword] = useState(''); 
    const navigate = useNavigate();
    const handleChangeEmail = (e)=>{
      setEmail(e.value);
    }
    const handleChangePassword = (e)=>{
      setPassword(e.value);
    }
    const handleClick=()=>{
      navigate('/dashboard');
    }
    const handleError=()=>{
      alert("Fields cannot be empty !");
    }
    const onSuccess=(res)=>{
      console.log("Login successful, Current User : ",res.profileObj);
      navigate('/dashboard');
    }
    const onFailure=(res)=>{
        console.log("Login Failed, res: ",res);
    }
    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId: clientId,
          scope:""
        })
      };
      gapi.load('client:auth2',start);
    });
  return (
    <>
    <div className='mainn'>
    <div className='sideDiv'>
      <p>Board.</p>
    </div>
    <div className='signUp'>
      <div className='sign'>
          <p className='signIn'>Sign In</p>
          <p className='signInT'>Sign in to your account</p>
            <GoogleLogin 
            clientId={clientId}
            buttonText=""
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            render={renderProps => (
              <button onClick={renderProps.onClick} className="signInButton"><FcGoogle/> Sign in with Google</button>
            )}
             />
          <div className='innput'>
              <p>Email Address</p>
              <input value={email} placeholder="example@gmail.com" type="email" onChange={handleChangeEmail}>
              </input>
              <p>Password</p>
              <input value={password} type="password" onChange={handleChangePassword}>
              </input>
              <p className='forgot colorBlue'>Forgot password?</p>
              {email!=='' && password!='' && <button onClick={handleClick}>Sign In</button>}
              {(email==='' || password==='') && <button onClick={handleError}>Sign In</button>}
          </div>
          <div className='dont'>
            <p>Don't have an account ?</p><p className='register colorBlue'>Register here</p>
          </div>
      </div>
    </div>
  </div>
  </>
)
}

export default SignUp;
