import Image from "next/image";
import HotelCard from "./HotelCard";

const HotelList = ({hotels,destination,checkin,checkout,sort}) => {

if (sort=='asc' || sort=='desc') {
  if (sort=='asc') {
    if (hotels?.length>0) {
      const ascendingArray=[...hotels].sort((a,b)=>a.lowRate-b.lowRate);
      return (
        ascendingArray.map(hotel=><HotelCard key={hotel._id} hotel={hotel} checkout={checkout} checkin={checkin} ></HotelCard>)
      );
    }
    else{
          return (
              'Sorry! No hotels available'
  );
    }
   
  }
  else if(sort=='desc'){
    if (hotels?.length>0) {
      const descendingArray=[...hotels].sort((a,b)=>b.lowRate-a.lowRate);
      return (
        descendingArray.map(hotel=><HotelCard key={hotel._id} hotel={hotel} checkout={checkout} checkin={checkin} ></HotelCard>)
      );
    }
    else{
          return (
              'Sorry! No hotels available'
  );
    }
   
  }
} else{
  return (
    <div>
       {hotels?.length>0 ? (
        hotels.map(hotel=><HotelCard key={hotel._id} hotel={hotel} checkout={checkout} checkin={checkin} ></HotelCard>)
       ):('Sorry! No hotels available')}
    </div>
  );
}


};

export default HotelList;