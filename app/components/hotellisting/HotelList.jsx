import Image from "next/image";
import HotelCard from "./HotelCard";

const HotelList = ({hotels,destination,checkin,checkout}) => {



  return (
    <div>
       {hotels?.length>0 ? (
        hotels.map(hotel=><HotelCard key={hotel._id} hotel={hotel} checkout={checkout} checkin={checkin} ></HotelCard>)
       ):('Sorry! No hotels available')}
    </div>
  );
};

export default HotelList;