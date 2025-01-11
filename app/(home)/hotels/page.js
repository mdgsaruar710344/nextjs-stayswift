import Filter from "../../components/hotellisting/Filter";
import HotelList from "../../components/hotellisting/HotelList";
import Search from "../../components/search/Search";

const hotelPage = () => {
  return (
    <div>
      <Search></Search>
      <div className="flex gap-80 justify-center">
      <Filter></Filter>
      <HotelList></HotelList>
      </div>
   
    </div>
  );
};

export default hotelPage;