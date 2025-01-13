import { createBookings } from "@/app/queries";
import { NextResponse } from "next/server";

export async function POST(request) {
  const userSubmittedData=await request.json();
  
  const createdBookings=await createBookings(userSubmittedData);
  
  if(createdBookings){
    return NextResponse.json({
      message:'User reached Payment API successfully',
      data: createdBookings
    },
    {
      status: 201
    }
    
    )
  }
  
  else{
    return NextResponse.json({
      message:'Bookings creation failed'
    })
  }
}