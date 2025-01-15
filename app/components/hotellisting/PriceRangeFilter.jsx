"use client"
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PriceRangeFilter = () => {
  const router= useRouter();
 const searchParams= useSearchParams();
 const pathname= usePathname();
 const params= new URLSearchParams(searchParams);
  const [priceRange, setPriceRange]=useState([])
const handleRangeChange=(e)=>{
const {name,checked}=e.target;
if(checked){
setPriceRange((prev)=>[...prev,name]);
}
else{
  setPriceRange((prev)=>prev.filter((item)=>item!==name));
}};


useEffect(()=>{
if (priceRange.length>0) {
  const querydata=priceRange.join('|');
 
  params.set('pricerange',querydata);
}
else{
  params.delete('pricerange');
}
router.push(`${pathname}?${params.toString()}`)
},[priceRange])

  return (
    <div>
       <div>
            <h3 className="font-bold text-lg">Price Range</h3>
            <form onChange={handleRangeChange} className="flex flex-col gap-2 mt-2">
              <label htmlFor="range1">
                <input type="checkbox" name="range1" id="range1"/>
                Below $1000
              </label>

              <label htmlFor="range2">
                <input type="checkbox" name="range2" id="range2"/>
                $ 1000 - $ 1999
              </label>

              <label htmlFor="range3">
                <input type="checkbox" name="range3" id="range3"/>
                $ 2000 - $ 2999
              </label>

              <label htmlFor="range3">
                <input type="checkbox" name="range4" id="range3"/>
                $ 3000 - $ 3999
              </label>

              <label htmlFor="range4">
                <input type="checkbox" name="range5" id="range4"/>
                $ 4000 - $ 4999
              </label>

              <label htmlFor="range5">
                <input type="checkbox" name="range6" id="range5"/>
               Higher  $5000
              </label>
            </form>
          </div>
    </div>
  );
};

export default PriceRangeFilter;