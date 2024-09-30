import { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../Utils/Validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../Utils/firebase";


const Login = ()=>{
  const [isSignInForm,setisSignInForm]=useState(true);
  const [errorMessage,seterrorMessage]=useState(null);
  //const[loading,setLoading]=useState(false)
 const email= useRef(null);
 const password=useRef(null);
  const handleButtonClick= ()=>{
     //validate The Form Data 
    // setLoading(true)
     const message=checkvalidData(email.current.value,password.current.value);
     seterrorMessage(message);
    if(message){
      return;
    }
     //SignIn or SignUp logic
     if(!isSignInForm){
       //signUp form
       createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   // console.log(user);
   //setLoading(false)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage);
    //setLoading(false)
  });

     }



     else{
      //signIn form
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user);
   //setLoading(false)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode +"-"+errorMessage);
    //setLoading(false)
  });

     }

  }
   const toggleSignInForm=()=>{
      setisSignInForm(!isSignInForm);
   }
    return(
     <div>
       <Header/>
      <div className="fixed top-0 left-0 w-screen h-screen ">
       <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg' alt='bg-logo' className="w-full h-full object-cover"/>
       </div>
       <form onSubmit={(e)=>{e.preventDefault()}} className="md:w-3/12 w-full absolute p-12 bg-black my-36 md:mx-auto  right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "SignIn" :"SignUp"}</h1>
        <input ref ={email}type="text" placeholder="Email" className="p-2 my-2 w-full bg-gray-300"/>
        <input ref ={password} type="password" placeholder="Password" className=" p-2 my-2 w-full bg-gray-300"/>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
        {isSignInForm ? "SignIn" :"SignUp"} 
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflixgpt? SignUp Now" :"Already a registered user? SignIn Now"}</p>
       </form>
     </div>
     
    );
};
export default Login;