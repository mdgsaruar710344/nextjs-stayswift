import { handleGetAllHotels } from "@/app/actions";
import Filter from "../../components/hotellisting/Filter";
import HotelList from "../../components/hotellisting/HotelList";
import Search from "../../components/search/Search";
import CheckboxComponent from "@/app/components/hotellisting/Checkboxtest";
import PriceRangeFilter from "@/app/components/hotellisting/PriceRangeFilter";
import SortByFilter from "@/app/components/hotellisting/SortByFilter";

const hotelPage = async({searchParams}) => {
  console.log(searchParams)
  const destination=searchParams?.destination;
  const checkin=searchParams?.checkin;
  const checkout=searchParams?.checkout;
  const categoryQuery=searchParams?.category;
  const category=categoryQuery?.split("|");
  console.log('category query',categoryQuery,category)
  const priceRangeQuery=searchParams?.pricerange;
  const priceRange=priceRangeQuery?.split("|");
  console.log('priceRange query',priceRangeQuery,priceRange)
  const hotels= await handleGetAllHotels(destination,checkin,checkout,category,priceRange);
  // console.log(hotels);
  return (
    <div>
      <Search fromHome={false}></Search>
      <div className="flex gap-40 justify-center">
        <SortByFilter></SortByFilter>
        <PriceRangeFilter></PriceRangeFilter>
      <Filter></Filter>
      <HotelList hotels={hotels} destination={destination} checkin={checkin} checkout={checkout} category={category} priceRange={priceRange} ></HotelList>
      </div>
   
    </div>
  );
};

export default hotelPage;