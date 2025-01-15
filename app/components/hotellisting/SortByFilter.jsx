"use client"
import React, { useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SortByFilter = () => {
  const pathname= usePathname();
  const searchParams= useSearchParams();
  const router= useRouter();
  const params= new URLSearchParams(searchParams);
 const sort=params?.get('sort');

  const [sortMethod,setsortMethod]=useState({
    method:''
    
  })
  const handleChange=(e)=>{
  
   const {value}=e.target;
   
   setsortMethod((prev)=>({...prev,method:value}));
  }
  useEffect(()=>{
      if (sortMethod.method=='default') {
        params.delete('sort')
      }
      else{
        params.set('sort',sortMethod.method)
      }
    router.push(`${pathname}?${params.toString()}`)
  },[sortMethod])
  return (
    <div>
        <div>
            <h3 className="font-bold text-lg">Sort By</h3>
            <form  className="flex flex-col gap-2 mt-2">
            <select  onChange={handleChange} name="sortOption" defaultValue={ sort? sort:'default'} id="sortOption">
                    <option value="default">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                  
                  </select>

            </form>
          </div>
    </div>
  );
};

export default SortByFilter;