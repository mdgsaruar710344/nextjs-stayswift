"use server"

import { auth, signIn, signOut } from "@/auth"
import { revalidatePath } from "next/cache";

export async function SignInWithGoogle(){
 const signedUser=await signIn("google", {redirectTo:"/"});
}


export async function SignInWithCredentials(formData){
  const email=formData.get("email");
  const password=formData.get("password");

try {
  const response= await signIn("credentials", {
    email: email,
    password: password,
    redirect:false
  });
  const session=await auth();
  console.log('New session:',session);

  return response;
} catch (error) {
  console.error(error);
}

}

export async function DoSignOut(){
 const signedOutUser=await signOut({redirectTo:"/login"});
}

export async function refreshPage(){
  revalidatePath('/'); 
}

export async function getSession() {
 const bufferSession=await fetch("http://localhost:3000/api/auth/session");
 const Sessiondata=bufferSession.json();
 return Sessiondata;

}

export async function handleRegistration(formData) {
  const fname=formData.get("fname");
  const lname=formData.get("lname");
const name= `${fname} ${lname}`;
  const email=formData.get("email");
  const password=formData.get("password");
  const userData={
    name,
    email,
    password,
  }
  const response=await fetch("http://localhost:3000/api/auth/register",{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(userData),
  });

  const data= await response.json();
  console.log('Data from POST API in action page:',data);
 return data;

}