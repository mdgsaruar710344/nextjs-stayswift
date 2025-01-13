import BookedHotelCard from "./BookedHotelCard";

const UpcomingBookings = ({upcomingBookings}) => {
  return (
    <div>
        <div className="space-y-4">
            <h2 className="text-xl font-bold">⌛️ Upcomming Bookings {upcomingBookings && upcomingBookings?.length} </h2>
          
          
           {upcomingBookings.length>0 && upcomingBookings.map(booking=><BookedHotelCard key={booking._id} booking={booking} ></BookedHotelCard>)}
       
         
          </div>
    </div>
  );
};

export default UpcomingBookings;