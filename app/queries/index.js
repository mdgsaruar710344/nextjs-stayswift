import { hotelsModel, reviewsModel, usersModel } from "../models";

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

export async function getAllHotels() {
  try {
    const hotels=await hotelsModel.find().lean();
    console.log(hotels);
    return hotels;
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
    console.log(hotel);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}


export async function getRatingsByHoyelId(hotelID) {
  try {
    const hotel=await hotelsModel.findById(hotelID).lean();
    console.log(hotel);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}


export async function getAmenitiesById(hotelID) {
  try {
    const hotel=await hotelsModel.findById(hotelID).lean();
    console.log(hotel);
    return hotel;
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

export async function getUserByEmail(email) {
  try {
    const user=await usersModel.findOne({email:email}).lean();
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
  }
}