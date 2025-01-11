import { createUser } from "@/app/queries";
import { NextResponse } from "next/server";

export async function POST(request){
const userSubmittedData=await request.json();

const createdUser=await createUser(userSubmittedData);

if(createdUser){
  return NextResponse.json({
    message:'User reached API successfully',
    data: createdUser
  },
  {
    status: 201
  }
  
  )
}

else{
  return NextResponse.json({
    message:'User creation failed'
  })
}
}