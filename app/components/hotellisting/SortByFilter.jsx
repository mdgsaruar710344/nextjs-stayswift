"use client"
import React, { useState } from 'react';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SortByFilter = () => {
  const pathname= usePathname();
  const searchParams= useSearchParams();
  const router= useRouter();
  const params= new URLSearchParams(searchParams);
 const sort=params?.get('sort');

  const [sortMethod,setsortMethod]=useState({
    ascending:true,
    descending:false,
  })
  const handleChange=(e)=>{
   e.preventDefault();
   const {value}=e.target;
   console.log(value);
  }
  return (
    <div>
        <div>
            <h3 className="font-bold text-lg">Sort By</h3>
            <form  className="flex flex-col gap-2 mt-2">
            <select  onChange={handleChange} name="sortOption" id="sortOption">
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                  
                  </select>

            </form>
          </div>
    </div>
  );
};

export default SortByFilter;