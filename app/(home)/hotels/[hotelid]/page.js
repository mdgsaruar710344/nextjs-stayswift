import { checkIfBooked, handleGetHotelById } from "@/app/actions";
import HotelDetails from "@/app/components/hotellisting/HotelDetails";
import { auth } from "@/auth";

const HotelDetailsPage =async ({params,searchParams}) => {
  const checkin=searchParams?.checkin;
  const checkout=searchParams?.checkout;
  const hotelID=params?.hotelid;
  let availableForBooked;

  const hotel= await handleGetHotelById(hotelID);
  const session=await auth();

  
  if(checkin&& checkout){
    availableForBooked= await checkIfBooked(hotelID,checkin,checkout);
    console.log('availableForBooked in Hotel card',availableForBooked,hotelID);
  }




  return (
    <div>
      This is hotel details Page
      <br></br>
      Name:
 {hotel?.name && hotel.name}
 {hotel?._id && <HotelDetails availableForBooked={availableForBooked} checkin={checkin} checkout={checkout}  session={session} hotel={hotel} ></HotelDetails>}
    </div>
  );
};

export default HotelDetailsPage;