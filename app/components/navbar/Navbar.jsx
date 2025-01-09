import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between">
    
      <div>
      <Link href="/">
      <Image 
      src="/stayswift.svg"
       alt="Stay Swift Logo" 
      width={150}
      height={150}
      srcset=""/>
    </Link>

      </div>


      <div>

      <ul className="flex gap-5 m-4 justify-end">
      <li>
        <Link href={''}>Recommended Places</Link>
      </li>

      <li>
        <Link href={''}>About Us</Link>
      </li>

      <li>
        <Link href={''}>Contact us</Link>
      </li>

      <li>
        <Link href="/bookings">Bookings</Link>
      </li>

      <li>
        <Link href="/login" class="login">Login</Link>
      </li>
    </ul>
      </div>
 
      </div>
    
    
  );
};

export default Navbar;