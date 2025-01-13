import { handleGetReviewsByHotelId, handleGetUserByEmail } from "@/app/actions";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const HotelDetails =async ({hotel,availableForBooked,checkin,checkout}) => {
const session=await auth();
const email= session?.user?.email;
const user= await handleGetUserByEmail(email);
const userId= user?._id;
const review=await handleGetReviewsByHotelId(hotel?._id);
let readytobook;
if(session?.user && availableForBooked){
  readytobook=true;
}
if(review){
  console.log('Review of hotel',review);
}
  return (
    <div>
      Hello
      <div className="col-span-9">
         
         <div className="space-y-4">
           <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
           {hotel?.thumbNailUrl &&              <Image src={hotel.thumbNailUrl} className="max-h-[162px] max-w-[240px]" alt=""  height={100} width={100}/>
 }
             <Image src="/assets/images/image-1.png" className="max-h-[162px] max-w-[240px]" alt=""  height={100} width={100}/>
             <div className="flex-1">
               <h2 className="font-bold text-lg">{hotel?.name && hotel.name}</h2>
               <p>📍 {hotel?.city && hotel.city}</p>
               <div className="flex gap-2 items-center my-4">
                 <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                   5.3
                 </div>
                 <span className="font-medium">Very Good</span>
                 <span>{review?.length>0 && review[0].review}</span>
               </div>
             </div>

             <div className="flex flex-col gap-2 items-end justify-center">
               <h2 className="text-2xl font-bold text-right">$124/night</h2>
               <p className=" text-right">Per Night for 4 Rooms</p>
               {availableForBooked ? <>Available</> :<>Booked</>}
               {readytobook?(<Link href={`/payment?hotelid=${hotel?._id}&userId=${user?._id}&checkin=${checkin}&checkout=${checkout}`} className="btn-primary ">Book</Link>):( <button className="btn-primary cursor-not-allowed opacity-50">Not Available to Book</button>)}
            
             </div>
           </div>

        
         </div>
       </div>
    </div>
  );
};

export default HotelDetails;