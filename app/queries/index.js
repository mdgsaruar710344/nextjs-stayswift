import mongoose from "mongoose";
import { amenitiesModel, bookingsModel, hotelsModel, ratingsModel, reviewsModel, usersModel } from "../models";

export async function getAllUsers() {
  try {
    const users=await usersModel.find().lean();
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
  }
}
// export async function getUserByEmail(email) {
//   try {
//     const user=await usersModel.find({
//       email:email,
//     }).lean();
//     console.log(user);
//     return user;
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function getAllHotels(destination,checkin,checkout,category) {
  try {
    console.log('category inside queries',category);
    if(category && destination){
      
      const hotels=await hotelsModel.find({
        city: destination,
        propertyCategory:{$in:category}
       }).lean();
       console.log('hotels in query1',hotels)
       return hotels;
    }
    else if(!category && destination){
      console.log('destination inside queries',destination);
      const hotels=await hotelsModel.find({
        city: destination
       }).lean();
       console.log('hotels in query2',hotels)
       return hotels;
    }
    else if(!category && !destination){
      const hotels=await hotelsModel.find().lean();
       console.log('hotels in query3',hotels)
       return hotels;
    }
 
    // console.log(hotels);

  //  const bookedhotel=await Promise.all(hotels.map(async (hotel)=>{
  //   const bookings=  await getBookingsByHotelId(hotel._id);
  //   return bookings;
    // }));
    
  } catch (error) {
    console.error(error);
  }
}



export async function getReviewsByHotelId(hotelID) {
  try {
    const hotel=await reviewsModel.find({
    hotelId:hotelID}).lean();
    console.log(hotel);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}


export async function getHotelById(hotelID) {
  try {
    const hotel=await hotelsModel.findById(hotelID).lean();
    // console.log(hotel);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}


export async function getRatingsByHotelId(hotelID) {
  try {
    const hotel=await ratingsModel.find({
      hotelId:hotelID}).lean();
    console.log(hotel);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}

export async function getBookingsByUserId(userId) {
  try {
    const bookings=await bookingsModel.find({
      userId:userId}).lean();
    console.log(bookings);
    return bookings;
  } catch (error) {
    console.error(error);
  }
}
export async function getBookingsByHotelId(hotelId) {
  try {
    const bookings=await bookingsModel.find({
      hotelId:hotelId}).lean();
    console.log(bookings);
    return bookings;
  } catch (error) {
    console.error(error);
  }
}


export async function getAmenitiesById(amenitiesId) {
  try {
    const amenities=await amenitiesModel.findById(amenitiesId).lean();
    console.log(amenities);
    return amenities;
  } catch (error) {
    console.error(error);
  }
}



export async function createUser(data) {
  const {name,email,password}=data;

  try {
    const createdUser=await usersModel.create({
      name:name,
      email:email,
      password:password,
    })
    console.log(createdUser);
    return createdUser;
  } catch (error) {
    console.error(error);
  }
}
export async function createBookings(data) {
  const {hotelId, userId,checkin,checkout}=data;
  const hotelidString = hotelId;
  const useridString = userId;

// Convert to ObjectId
const objecthotelId =new mongoose.Types.ObjectId(hotelidString);
const objectuserId =new mongoose.Types.ObjectId(useridString);


console.log('bookings data before inserting in database',objecthotelId,objectuserId,checkin,checkout);
  try {
    const createdBookings=await bookingsModel.create({
      hotelId:objecthotelId,
      userId:objectuserId,
      checkin:checkin,
      checkout:checkout,
    })
    console.log(createdBookings);
    return createdBookings;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserByEmail(email) {
  try {
    const user=await usersModel.findOne({email:email}).lean();
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
  }
}
export async function getUserByID(userId) {
  try {
    const user=await usersModel.findById(userId).lean();
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
  }
}