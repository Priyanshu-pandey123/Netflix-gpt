  import { useState } from "react";
 import Header from "./Header"
 const Login = () => {
    const [isSignInForm,setSignInForm]=useState(true);
    const toggleSignInFOrm=()=>{
        setSignInForm(!isSignInForm);
    }

   return (
     <div>
      
     <Header/>
     <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="zzz" />
     </div>
     <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm &&   <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600"/>}
        <input type="text" placeholder="email address" className="p-4 my-4 w-full bg-gray-600"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600"/>
        <button className="p-2 my-2 bg-red-600 w-full rounded-lg cursor-pointer">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="p-6 cursor-pointer" onClick={toggleSignInFOrm}>
            {isSignInForm ? "new to netflix?Sign Up Now" : "Already registered Sign In now..."} 
             </p>
     </form>
     </div>
   )
 }
 
 export default Login
 





 