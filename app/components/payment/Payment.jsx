import { handlePaymentSubmit } from "@/app/actions";
import { redirect } from "next/navigation";

const Payment = ({user,hotel,checkin,checkout}) => {
  const email=user?.email;
  const name=user?.name;
  const hotelname= hotel?.name;
  console.log(email,name,hotelname);
//   const handlePaymentSubmit=async(e)=>{
// e.preventDefault();
// const formData=new FormData(e.currentTarget);

// redirect('/bookings')
//   }
  return (
    <div>
        <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">You have picked <b>{hotelname && hotelname}</b> and base price is <b>$10</b>
        </p>
        <form action={handlePaymentSubmit} className="my-8">
          <div className="my-4 space-y-2">
            <label htmlFor="name" className="block">Name</label>
            <input type="text" id="name" defaultValue={name&&name} className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
          </div>

          <div className="my-4 space-y-2">
            <label htmlFor="email" className="block">Email</label>
            <input type="email" id="email" defaultValue={email&&email} className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
          </div>

          <div className="my-4 space-y-2">
            <span>Check in</span>
            <h4 className="mt-2">
              <input type="date" defaultValue={checkin&&checkin} name="checkin" id="checkin"/>
            </h4>
          </div>

  
          <div className="my-4 space-y-2">
            <span>Checkout</span>
            <h4 className="mt-2">
              <input type="date" defaultValue={checkout&&checkout} name="checkout" id="checkout"/>
            </h4>
          </div>

          <div className="my-4 space-y-2">
            <label htmlFor="card" className="block">Card Number</label>
            <input type="text" id="card" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
          </div>

          <div className="my-4 space-y-2">
            <label htmlFor="expiry" className="block">Expiry Date</label>
            <input type="text" id="expiry" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
          </div>

          <div className="my-4 space-y-2">
            <label htmlFor="cvv" className="block">CVV</label>
            <input type="text" id="cvv" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
          </div>

          <button type="submit" className="btn-primary w-full">Pay Now ($10)</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Payment;