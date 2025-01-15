
import Link from "next/link";
import LogOutButton from "./LogOutButton";
import { auth } from "@/auth";



const UserState =async () => {
 const session=await auth();

    return (
    <div>
          
     {session?.user ?(  <div className="flex"> 
        <div className="flex"> 
        {session?.user?.email} 
        </div>
      <LogOutButton></LogOutButton>
        </div> ):( <Link href={"/login"} className="login">Login</Link>)}
    </div>
  );
};

export default UserState;