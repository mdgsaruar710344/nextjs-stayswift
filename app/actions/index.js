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

