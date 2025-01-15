"use client"

import { handleRegistration } from "@/app/actions";

const Registration = () => {

  const handleRegistrationSubmit=async(e)=>{
       e.preventDefault();
       const formData=new FormData(e.currentTarget);
      const submittedUserInfo= await handleRegistration(formData);
    
  }
  return (
    <div className=" items-center text-center ">
         <h4 className="font-bold text-2xl " >Sign up</h4>
        <form onSubmit={handleRegistrationSubmit} className="login-form w-60">
          <div>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" />
          </div>

          <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button type="submit" className="btn-primary w-full mt-4">Create account</button>
        </form>
    </div>
  );
};

export default Registration;