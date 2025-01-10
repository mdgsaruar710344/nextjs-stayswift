import { auth } from "@/auth";
import { redirect } from "next/navigation";

const bookingsPage = async() => {
const session=await auth();
if(!session?.user){
 
redirect("/");
}
else{
  console.log('from bookings:',session);
}
  return (
    <div>
      Bookings Page!
    </div>
  );
}

export default bookingsPage;