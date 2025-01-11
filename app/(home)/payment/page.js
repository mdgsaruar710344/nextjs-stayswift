import { auth } from "@/auth";
import { redirect } from "next/navigation";

const paymentPage = async() => {
  const session= await auth();
  if(!session?.user){
    redirect('login');
  }
  return (
    <div>
      Payment Page
    </div>
  );
};

export default paymentPage;