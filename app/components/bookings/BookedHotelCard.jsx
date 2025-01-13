import { handleGetHotelById } from "@/app/actions";
import dayjs from "dayjs";


const BookedHotelCard =async ({booking}) => {
  console.log('booking in component',booking);
  let hotel;
  let days;
 const hotelId=booking?.hotelId;
 const checkin=booking?.checkin;
 const checkout=booking?.checkout;
 let dateDifference;
 if (checkin  && checkout) {
  const checkinday=dayjs(checkin);
  const checkoutday=dayjs(checkout);
  days=checkoutday.diff(checkinday,'day')+1;
 }
 
 if (hotelId) {
  const foundhotel= await handleGetHotelById(hotelId);
  hotel=foundhotel;
  console.log("hotel in bookCard",hotel);
 }
  return (
    <div>
    Card for  Hotel Booked
    <div className="bg-[#F6F3E9] p-4 rounded-md">
              <div className="flex justify-between items-center ">
                <div>
                  <h3 className="text-xl font-semibold">{hotel && hotel?.name}</h3>
                  <div className="text-sm text-gray-600 my-4">
                    <p>Check In: {checkin && dayjs(checkin).format('DD/MM/YYYY') }</p>
                    <p>Check Out: {checkout && dayjs(checkout).format('DD/MM/YYYY') }</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-right">${hotel && (hotel?.highRate+hotel?.lowRate)/2}</h3>
                  <p className="text-sm text-gray-600">Total day: {days && days}</p>
                </div>
              </div>

            </div>
    </div>
  );
};

export default BookedHotelCard;