"use server"

import { auth, signIn, signOut } from "@/auth"
import { revalidatePath } from "next/cache";
import { getAllHotels, getAmenitiesById, getBookingsByHotelId, getBookingsByUserId, getHotelById, getRatingsByHotelId, getReviewsByHotelId, getUserByEmail, getUserByID } from "../queries";
import { redirect } from "next/navigation";

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

export async function handlePaymentSubmit(formData){

  const name=formData.get("name");
  const email=formData.get("email");
  const checkinDate=formData.get("checkin");
  const checkoutDate=formData.get("checkout");
  const hotelId=formData.get("hotelId");
  const userId=formData.get("userId");
  
  const checkin= new Date(checkinDate).getTime();
  const checkout= new Date(checkoutDate).getTime();

  console.log('checkin, checkout data in actions handlepayment submit',checkin,checkout,checkinDate,checkoutDate);
  const paymentData={
    name,
    email,
    checkin,
    checkout,
    hotelId,
    userId,
  }
  const response=await fetch("http://localhost:3000/api/auth/payment",{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(paymentData),
  });

  const data= await response.json();
  console.log('Data from POST API of payment in action page:',data);
 if(data){
  redirect('/bookings');
 }

}

export async function handleGetAllHotels(destination,checkin,checkout,category){
  console.log('category in actions',category);
  const hotels= await getAllHotels(destination,checkin,checkout,category);

  return hotels;
}

export async function handleGetUserByEmail(email){
  const user= await getUserByEmail(email);
  return user;
}
export async function handleGetUserByID(userId){
  const user= await getUserByID(userId);
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
export async function handleGetBookingsByHotelId(hotelId){
  const bookings= await getBookingsByHotelId(hotelId);
  
  return bookings;
}
export async function handleGetAmenitiesById(amenitiesId){
  const amenities= await getAmenitiesById(amenitiesId);
  return amenities;
}




export async function checkIfBooked(hotelId,checkin,checkout) {
  const checkinMili=new Date(checkin).getTime();
  const checkoutMili=new Date(checkout).getTime();


  const bookings=  await getBookingsByHotelId(hotelId);
  console.log('bookings in action with timestamp',bookings,checkinMili,checkoutMili);
  if(bookings?.length>0){
  const availableForBook=  bookings.every((book)=>
         book.checkin>checkoutMili || book.checkout<checkinMili 
    )
    if(availableForBook){
      return true;
    }
    else {
      return null;
    }
  }
      else {
      return true;}
  }
