import { usersModel } from "../models";

export async function getAllUsers() {
  try {
    const users=await usersModel.find().lean();
    console.log(users);
    return users;
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