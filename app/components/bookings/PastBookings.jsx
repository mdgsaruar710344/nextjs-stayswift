import BookedHotelCard from "./BookedHotelCard";

const PastBookings = ({pastBookings}) => {
  return (
    <div>
           <div className="space-y-4">
            <h2 className="text-xl font-bold">🕛️ Past Bookings {pastBookings && pastBookings?.length}</h2>
           
            {pastBookings.length>0 && pastBookings.map(booking=><BookedHotelCard key={booking._id} booking={booking} ></BookedHotelCard>)}
        
          </div>
    </div>
  );
};

export default PastBookings;