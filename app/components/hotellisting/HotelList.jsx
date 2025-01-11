import Image from "next/image";
import HotelCard from "./HotelCard";

const HotelList = ({hotels}) => {



  return (
    <div>
       {hotels.length>0 ? (
        hotels.map(hotel=><HotelCard key={hotel._id} hotel={hotel}></HotelCard>)
       ):('Sorry! No hotels available')}
    </div>
  );
};

export default HotelList;