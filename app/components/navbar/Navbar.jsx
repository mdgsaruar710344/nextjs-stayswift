
import Image from "next/image";
import Link from "next/link";
import UserState from "./UserState";


const Navbar = ({fromHomeState}) => {

if(fromHomeState){
  return ( <div className="flex justify-between">
    
  <div>
  <Link href="/">
  <Image 
  src="/stayswift.svg"
   alt="Stay Swift Logo" 
  width={150}
  height={150}
  />
</Link>

  </div>


  <div>

  <ul className="flex gap-5 m-4 justify-end">
  <li>
    <Link href={'/recommendation'}>Recommended Places</Link>
  </li>

  <li>
    <Link href={'/about'}>About Us</Link>
  </li>

  <li>
    <Link href={'/contact'}>Contact us</Link>
  </li>

  <li>
    <Link href="/bookings">Bookings</Link>
  </li>



    <UserState></UserState>

</ul>
  </div>

  </div>)
}
  return  ;
};

export default Navbar;