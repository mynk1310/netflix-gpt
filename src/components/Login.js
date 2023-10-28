import React, {useRef, useState} from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {

  const [isSignInForm, setIsSignInForm]=useState(true);
  const [errorMessage, setErrorMessage]=useState(null);  //used to have the error message

 
  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick=()=>{

    //Validate the Form Data

    const message=checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    //Once Validation has succeded , we can do a Sign In/Sign Up




  }

  return (
    <div>
    <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="bg-img" />
      </div>
      <div className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 rounded-md'>
       <form onSubmit={(e)=>e.preventDefault()}>
        
        <div className='text-3xl font-semibold text-white m-2 px-2 pt-0 pb-6 rounded-md'>{isSignInForm?"Sign In":"Sign Up"}</div>
        
        
        {!isSignInForm && <input type="text" placeholder='Full Name' className='px-2 py-3 mx-2 my-4 w-full text-white rounded-md bg-gray-800' />}
        
        <input type="text" placeholder='Email' ref={email}
               className='px-2 py-3 mx-2 my-4 w-full text-white rounded-md bg-gray-800' />
        
        
        <input type="password" placeholder='Password' ref={password}
             className='px-2 py-3 mx-2 my-4 w-full rounded-md text-white bg-gray-800' />
        
        <p className='text-red-500 px-2'>{errorMessage}</p>
        
        <button className='p-3 mx-2 my-8 bg-red-600 text-white font-medium w-full rounded-md'
              onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        
        </form>

        <div className='flex'>
        <p className=' pl-3 pr-1 text-sm text-gray-400'>{isSignInForm?"New to Netflix ?":"Already a User ?"}</p>
        <button className='text-sm text-white' onClick={toggleSignInForm}> {isSignInForm?"Sign up now":"Sign in now"}</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Login;