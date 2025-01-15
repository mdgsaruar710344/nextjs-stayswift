"use client"

import {  usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
 const pathname= usePathname();
 const searchParams= useSearchParams();
 const router= useRouter();



 const [searchTerm,setSearchTerm]= useState({
  destination: searchParams?.get('destination') || 'Puglia',
  checkin: searchParams?.get('checkin')||'',
  checkout:searchParams?.get('checkout')|| '',
 })

 const [isSearchButtonActive,setIsSearchButtonVisible]=useState(true);
  const handleChange=(e)=>{

   const {name,value}=e.target

   setSearchTerm( (prevData)=>({...prevData,[name]:value}))
  }
useEffect(()=>{

  const {destination,checkin,checkout}=searchTerm;
  setIsSearchButtonVisible(true);
    
  if (checkin && checkout) {
    const checkinTime = new Date(checkin).getTime();
    const checkoutTime = new Date(checkout).getTime();
    const currentTime = Date.now();

    if (checkinTime > checkoutTime || checkinTime < currentTime) {
      setIsSearchButtonVisible(false);
    }
  } else if (checkin || checkout) {
    setIsSearchButtonVisible(false);
  }
      

},[searchTerm])



const handleSearchSubmit = async () => {
  const { destination, checkin, checkout } = searchTerm;

  const queryParams = new URLSearchParams();

  queryParams.set("destination", destination);

  // Only set checkin and checkout if they are provided; otherwise, delete them.
  if (checkin) {
    queryParams.set("checkin", checkin);
  } else {
    queryParams.delete("checkin");
  }

  if (checkout) {
    queryParams.set("checkout", checkout);
  } else {
    queryParams.delete("checkout");
  }

  const queryString = queryParams.toString();

  if (pathname.includes("/hotels")) {
    router.push(`${pathname}?${queryString}`);
  } else {
    router.push(`${pathname}hotels?${queryString}`);
  }
};



  return (
    <div>
           <div className="lg:max-h-[250px] mt-6">
            <div id="searchParams"  className="flex  gap-5 m-4 justify-center">
            
              <div>
                <span>Destination</span>
                <h4 className="mt-2">
                  <select defaultValue={searchTerm.destination} onChange={handleChange} name="destination" id="destination">
                    <option value="Puglia">Puglia</option>
                    <option value="Catania">Catania</option>
                    <option value="Paris">Paris</option>
                    <option value="Frejus">Frejus</option>
                    <option value="Calvi">Calvi</option>
                  </select>
                </h4>

              </div>

              
              <div>
                <span>Check in</span>
                <h4 className="mt-2">
                  <input onChange={handleChange} type="date" defaultValue={searchTerm.checkin} name="checkin" id="checkin"/>
                </h4>

              </div>

           
              <div>
                <span>Checkout</span>
                <h4 className="mt-2">
                  <input onChange={handleChange} type="date" defaultValue={searchTerm.checkout} name="checkout" id="checkout"/>
                </h4>
              </div>
            </div>
          </div>
          {isSearchButtonActive? (<button onClick={handleSearchSubmit} className="search-btn align-middle text-center place-items-center">
            🔍️ Search
          </button>):(<button className="search-btn bg-slate-500 align-middle cursor-not-allowed opacity-50 text-center place-items-center" disabled={true}>
            🔍️ Search
          </button>)}
        
    </div>
  );
};

export default Search;