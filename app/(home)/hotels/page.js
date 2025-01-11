import { handleGetAllHotels } from "@/app/actions";
import Filter from "../../components/hotellisting/Filter";
import HotelList from "../../components/hotellisting/HotelList";
import Search from "../../components/search/Search";

const hotelPage = async() => {
  const hotels= await handleGetAllHotels();
  // console.log(hotels);
  return (
    <div>
      <Search></Search>
      <div className="flex gap-80 justify-center">
      <Filter></Filter>
      <HotelList hotels={hotels}></HotelList>
      </div>
   
    </div>
  );
};

export default hotelPage;