import Image from "next/image";
import Search from "../components/search/Search";
import { auth } from "@/auth";
import { getSession } from "../actions";

export default async function Home({searchParams}) {
 const sessionData= await auth();
 console.log(sessionData);
 console.log("hello");
  return (
   <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center h-48 w-full">
    Home page
    <Search fromHome={true}></Search>
   </div>
  );
}
