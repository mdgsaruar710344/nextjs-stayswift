import React from 'react';
import PastBookings from './PastBookings';
import UpcomingBookings from './UpcomingBookings';

const Bookings = ({user,bookingsOfUser}) => {
  let pastBookings;
  let upcomingBookings;
  const currentTime=Date.now();

  if (bookingsOfUser.length>0) {
  const allpastBookings= bookingsOfUser.filter((booking)=>booking.checkout<currentTime);
  const allUpcomingBookings= bookingsOfUser.filter((booking)=>booking.checkin>currentTime);
  if (allpastBookings) {
    pastBookings=allpastBookings;
  }
  if (allUpcomingBookings) {
    upcomingBookings=allUpcomingBookings;
  }
  }

  return (
    <div>
       <section className="mt-[100px]">
      <div className="container">
      
        <div className="flex flex-col items-center py-8 text-center">
         
          <div
            className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-orange-600 grid place-items-center text-4xl text-white">
            S
          </div>
        
          <div>
            <h3 className="text-2xl font-semibold lg:text-[28px]">
             {user?.name && user.name}
            </h3>
            <p className="leading-[231%] lg:text-lg"> {user?.email && user.email}</p>
          </div>


          <div classemail="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
        </div>
     
      </div>
    </section>

    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

     
<PastBookings pastBookings={pastBookings} ></PastBookings>
       <UpcomingBookings upcomingBookings={upcomingBookings} ></UpcomingBookings>
        

        </div>
      </div>
    </section>
    </div>
  );
};

export default Bookings;