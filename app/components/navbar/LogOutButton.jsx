"use client"
import { DoSignOut } from "@/app/actions";

const LogOutButton = () => {

  const handleLogOut=async()=>{
await DoSignOut();
  }
  return (
    <div className="mx-2">
    
        <button onClick={handleLogOut}>LogOut</button>
    
    </div>
  );
};

export default LogOutButton;