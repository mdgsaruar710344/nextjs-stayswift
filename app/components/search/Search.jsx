"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
 const pathname= usePathname();
 const searchParams= useSearchParams();
 const router= useRouter();
 const params= new URLSearchParams(searchParams);
const targetDestination=params?.get('destination');
const targetCheckin=params?.get('checkin');
const targetCheckOut=params?.get('checkout');
console.log('all target',targetDestination,targetCheckin,targetCheckOut);
 const [searchTerm,setSearchTerm]= useState({
  destination: targetDestination || 'Puglia',
  checkin: targetCheckin||'',
  checkout:targetCheckOut|| '',
 })

 const [isSearchButtonActive,setIsSearchButtonVisible]=useState(true);
  const handleChange=(e)=>{
   e.preventDefault();
   const {name,value}=e.target
  //  console.log(name,value);
   setSearchTerm( (prevData)=>({...prevData,[name]:value}))
  }
useEffect(()=>{
  console.log(searchTerm);
  const {destination,checkin,checkout}=searchTerm;
  setIsSearchButtonVisible(true);
    params.set('destination',destination)

      if(!checkin && !checkout){
        params.delete('checkin');
        params.delete('checkout');
      }else if(checkin && !checkout){
          params.set('checkin',checkin);
      }
      else if(checkout &&!checkin){
     
      }
      else if(checkout&& checkin){
        params.set('checkout',checkout);
        params.set('checkin',checkin);
        const checkinTime= new Date(checkin).getTime();
        const checkoutTime= new Date(checkout).getTime();
        const currentTime=Date.now();
        console.log(checkinTime,checkoutTime);
        if(checkinTime>checkoutTime && checkinTime<currentTime ){
          setIsSearchButtonVisible(false);
        }
      }
  

},[searchTerm])

useEffect(()=>{
console.log(params.toString());
console.log(params);
},[params])

const handleSearchSubmit=async()=>{
  if(pathname.includes('/hotels')){
    router.push(`${pathname}?${params.toString()}`);
}
else{
  router.push(`${pathname}hotels?${params.toString()}`);
}

  }


  return (
    <div>
           <div className="lg:max-h-[250px] mt-6">
            <div id="searchParams"  className="flex  gap-5 m-4 justify-center">
            
              <div>
                <span>Destination</span>
                <h4 className="mt-2">
                  <select defaultValue={targetDestination? targetDestination:'Puglia'} onChange={handleChange} name="destination" id="destination">
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
                  <input onChange={handleChange} type="date" defaultValue={targetCheckin&& targetCheckin} name="checkin" id="checkin"/>
                </h4>

              </div>

           
              <div>
                <span>Checkout</span>
                <h4 className="mt-2">
                  <input onChange={handleChange} type="date" defaultValue={targetCheckOut&& targetCheckOut} name="checkout" id="checkout"/>
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