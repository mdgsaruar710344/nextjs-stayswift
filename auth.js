import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import client from "./app/adapters/dbadapters";
import { connectDB } from "./app/services";
import { getUserByEmail } from "./app/queries";

const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;

export const {
  handlers:{GET,POST},
  auth,
  signIn,
  signOut
}=NextAuth({
  adapter: MongoDBAdapter(client),
  session:{
    strategy:'jwt',
  },
providers:[
  CredentialsProvider({
    credentials:{
      email:{},
      password:{}
    },
    async authorize(credentials){
      if(credentials==null){
          return null;
      }

       await connectDB();
       const user=await getUserByEmail(credentials?.email);
       if(user){
          if(user?.password==credentials.password){
            console.log("User logged in successfully:",user);
                return user;
          }  else{
            throw new Error('Wrong Credentials!')
          }
       }
       else{
        throw new Error('No user found for that email')
       }
    }
  }),
  GoogleProvider({
     clientId: GOOGLE_CLIENT_ID,
     clientSecret: GOOGLE_CLIENT_SECRET 
  })

 
]
});
