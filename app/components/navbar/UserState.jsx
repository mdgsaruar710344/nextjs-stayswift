
import Link from "next/link";
import LogOutButton from "./LogOutButton";
import { auth } from "@/auth";



const UserState =async () => {
 const session=await auth();
// const { data: session, status}= useSession();
// const pathname=usePathname();

// useEffect(() => {
// fetch("http://localhost:3000/api/auth/session")
// .then(data=> data.json()) 
// .then(data=>{ console.log("User session data:", data)}) ;
// }, [pathname]); 

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