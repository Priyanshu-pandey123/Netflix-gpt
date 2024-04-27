  import { useState,useRef } from "react";
 import Header from "./Header"
 import { checkValidation } from "../utils/validate";
 import {createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


 const Login = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();
    const [isSignInForm,setSignInForm]=useState(true);
    const [errorMessage,seterrorMessage]=useState(null);
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{

      checkValidation(email,password);
      const message=checkValidation(email.current.value,password.current.value);
      seterrorMessage(message);
     
      if(message) return;

      if(!isSignInForm){
        //sign Up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential)=>{
          const user=userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error)=>{
          const errorCode=error.code;
          const errorMessage=error.message;
          seterrorMessage(errorCode+".... "+errorMessage);
        });
      }else{
        //sign In logic


        
     
        signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;



            updateProfile(user,
               {
              displayName: name.current.value,
               photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
              const {uid,email,displayName,photoURL}=auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              // Profile updated!
              // ...
              navigate("/browse");
            }).catch((error) => {
             seterrorMessage(error.message);
            });
           console.log(user,"from in");
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode+" "+errorMessage);
            
          });



      }


    }

    const toggleSignInFOrm=()=>{
        setSignInForm(!isSignInForm);
    }

   return (
     <div>
      
     <Header/>
     <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="zzz" />
     </div>
     <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
       onSubmit={(e)=>e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm &&   <input  ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600"/>}
        <input 
        ref={email}
        type="email" 
        placeholder="email address" 
        className="p-4 my-4 w-full bg-gray-600"
        />
        <input  
        ref={password}
        type="password"
         placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
          />
          <p className=" text-red-600  font-bold text-xl">{errorMessage}</p>
        <button className="p-2 my-2 bg-red-600 w-full rounded-lg cursor-pointer" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="p-6 cursor-pointer" onClick={toggleSignInFOrm}>
            {isSignInForm ? "new to netflix?Sign Up Now" : "Already registered Sign In now..."} 
             </p>
     </form>
     </div>
   )
 }
 
 export default Login
 





 