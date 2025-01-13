import { handleGetAllHotels } from "@/app/actions";
import Filter from "../../components/hotellisting/Filter";
import HotelList from "../../components/hotellisting/HotelList";
import Search from "../../components/search/Search";
import CheckboxComponent from "@/app/components/hotellisting/Checkboxtest";

const hotelPage = async({searchParams}) => {
  console.log(searchParams)
  const destination=searchParams?.destination;
  const checkin=searchParams?.checkin;
  const checkout=searchParams?.checkout;
  const categoryQuery=searchParams?.category;
  const category=categoryQuery?.split("|");
  console.log('category query',categoryQuery,category)
  const hotels= await handleGetAllHotels(destination,checkin,checkout,category);
  // console.log(hotels);
  return (
    <div>
      <Search fromHome={false}></Search>
      <div className="flex gap-80 justify-center">
      <Filter></Filter>
      <HotelList hotels={hotels} destination={destination} checkin={checkin} checkout={checkout} category={category}  ></HotelList>
      </div>
   
    </div>
  );
};

export default hotelPage;