import { handleGetHotelById, handleGetUserByID } from "@/app/actions";
import Payment from "@/app/components/payment/Payment";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const paymentPage = async({searchParams}) => {


  const session= await auth();
  if(!session?.user){
    redirect('login');
  }

  const checkin=searchParams?.checkin;
  const checkout=searchParams?.checkout;
  const hotelId=searchParams?.hotelid;
  const userId=searchParams?.userId;

  const user= await handleGetUserByID(userId);
  const hotel=await handleGetHotelById(hotelId);
  return (
    <div>
      Payment Page
      <Payment user={user} hotel={hotel} checkin={checkin} checkout={checkout} ></Payment>
    </div>
  );
};

export default paymentPage;