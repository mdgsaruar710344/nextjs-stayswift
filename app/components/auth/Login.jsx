"use client"
import { SignInWithCredentials, SignInWithGoogle } from "@/app/actions";



import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";




const Login = () => {
 const [Error,setError]= useState('');
const router= useRouter();

  const handleLogInFormSubmit=async(e)=>{

    e.preventDefault();

    const formData= new FormData(e.currentTarget);
   
      try {
    const response= await SignInWithCredentials(formData);
   
    if(!!response.error){
      setError(response.error.message)
     }
     else{
    
       
  
        router.push("/bookings");
        router.refresh();
       
     }
      } catch (error) {
        console.error(error);
      }
 
  }
//  
  return (
    <div>
        <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>

        <form onSubmit={handleLogInFormSubmit} className="login-form">
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button type="submit" className="btn-primary w-full mt-4">Login</button>
        </form>

        <div className="text-center text-xs text-gray-500">
          or Signup with
        </div>
        <div className="flex gap-4">
          <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src="/assets/fb.png" alt="fb" height={50} width={50}/>
            <span>Facebook</span>
          </button>

          <form action={SignInWithGoogle}>
              <button type="submit" className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"> 
                <Image src="/assets/google.png" alt="google" height={50} width={50}/>
                <span>Google</span>
              </button>
          </form>
    {Error && Error}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Login;