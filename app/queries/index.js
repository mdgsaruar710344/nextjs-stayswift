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

export async function getAllHotels(destination,checkin,checkout) {
  try {
    const hotels=await hotelsModel.find({
     city: destination
    }).lean();
    // console.log(hotels);

  //  const bookedhotel=await Promise.all(hotels.map(async (hotel)=>{
  //   const bookings=  await getBookingsByHotelId(hotel._id);
  //   return bookings;
    // }));
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

export async function getUserByEmail(email) {
  try {
    const user=await usersModel.findOne({email:email}).lean();
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
  }
}