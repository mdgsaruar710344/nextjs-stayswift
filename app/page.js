import Image from "next/image";
import Search from "./components/search/Search";

export default function Home() {
  return (
   <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center h-48 w-full">
    Home page
    <Search></Search>
   </div>
  );
}
