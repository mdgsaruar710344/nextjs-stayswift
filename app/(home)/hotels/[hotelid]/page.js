import { handleGetHotelById } from "@/app/actions";
import HotelDetails from "@/app/components/hotellisting/HotelDetails";

const HotelDetailsPage =async ({params}) => {
 
  const hotelID=params?.hotelid;
const hotel= await handleGetHotelById(hotelID);
  return (
    <div>
      This is hotel details Page
      <br></br>
      Name:
 {hotel?.name && hotel.name}
 {hotel?._id && <HotelDetails hotel={hotel} ></HotelDetails>}
    </div>
  );
};

export default HotelDetailsPage;