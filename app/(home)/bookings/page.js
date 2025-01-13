import { handleGetBookingsByUserId, handleGetUserByEmail } from "@/app/actions";
import Bookings from "@/app/components/bookings/Bookings";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const bookingsPage = async() => {
const session=await auth();
let user;
let bookingsOfUser;
if(!session?.user){
 
redirect("/");
}
else{
 const userEmail=session?.user?.email;
 const loggedUser= await handleGetUserByEmail(userEmail);
 if (loggedUser) {
  user=loggedUser;
  const userId=loggedUser?._id;
  const allbookingsOfUser=await handleGetBookingsByUserId(userId);
if(allbookingsOfUser){
bookingsOfUser=allbookingsOfUser;
}
 }
}
  return (
    <div>
      Bookings Page!
      <Bookings user={user} bookingsOfUser={bookingsOfUser}></Bookings>
    </div>
  );
}

export default bookingsPage;