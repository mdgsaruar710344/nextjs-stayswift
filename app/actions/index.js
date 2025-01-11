"use server"

import { auth, signIn, signOut } from "@/auth"
import { revalidatePath } from "next/cache";
import { getAllHotels, getAmenitiesById, getBookingsByUserId, getHotelById, getRatingsByHotelId, getReviewsByHotelId, getUserByEmail } from "../queries";

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

export async function handleGetAllHotels(){
  const hotels= await getAllHotels();
  return hotels;
}

export async function handleGetUserByEmail(email){
  const user= await getUserByEmail(email);
  return user;
}

export async function handleGetHotelById(hotelID){
  const hotel= await getHotelById(hotelID);
  return hotel;
}
export async function handleGetReviewsByHotelId(hotelID){
  const hotel= await getReviewsByHotelId(hotelID);
  return hotel;
}
export async function handleGetRatingsByHotelId(hotelID){
  const hotel= await getRatingsByHotelId(hotelID);
  return hotel;
}
export async function handleGetBookingsByUserId(userId){
  const bookings= await getBookingsByUserId(userId);
  return bookings;
}
export async function handleGetAmenitiesById(amenitiesId){
  const amenities= await getAmenitiesById(amenitiesId);
  return amenities;
}


