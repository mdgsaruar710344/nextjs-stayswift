import { handleGetAllHotels } from "@/app/actions";
import Filter from "../../components/hotellisting/Filter";
import HotelList from "../../components/hotellisting/HotelList";
import Search from "../../components/search/Search";

const hotelPage = async({searchParams}) => {
  console.log(searchParams)
  const destination=searchParams?.destination;
  const checkin=searchParams?.checkin;
  const checkout=searchParams?.checkout;
  const hotels= await handleGetAllHotels(destination,checkin,checkout);
  // console.log(hotels);
  return (
    <div>
      <Search fromHome={false}></Search>
      <div className="flex gap-80 justify-center">
      <Filter></Filter>
      <HotelList hotels={hotels} destination={destination} checkin={checkin} checkout={checkout} ></HotelList>
      </div>
   
    </div>
  );
};

export default hotelPage;