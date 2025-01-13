"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Filter = () => {
 const router= useRouter();
 const searchParams= useSearchParams();
 const pathname= usePathname();
 const params= new URLSearchParams(searchParams);

 const [checkboxdata,setCheckboxdata]=useState([])

 const handleChange=(e)=>{

   const {value,checked}=e.target;
   console.log(value);
  

  if (checked) {   
      setCheckboxdata( (prev) => [...prev, value]);   
  }
  else {
    setCheckboxdata((prev) => prev.filter((item) => item !== value))
       }
      }  
 console.log(checkboxdata);
useEffect(()=>{
if (checkboxdata.length>0) {
  const querydata=checkboxdata.join('|');
  console.log(querydata);
  params.set('category',querydata);
}
else{
  params.delete('category');
}
router.push(`${pathname}?${params.toString()}`)
},[checkboxdata])

  return (
    <div>
        <div className="col-span-3 space-y-4">
         
               
          <div>
            <h3 className="font-bold text-lg">Star Category</h3>
            <form onChange={handleChange}  className="flex flex-col gap-2 mt-2">
    
                <input type="checkbox"  value="5"   />
                5 Star
              

        
                <input type="checkbox" value="4"   />
                4 Star
              

             
                <input type="checkbox" value="3"   />
                3 Star
           

            
                <input type="checkbox" value="2"   />
                2 Star
              

              
                <input type="checkbox" value="1"  />
                1 Star
              

            </form>
          </div>

         </div>
    </div>
  );
};

export default Filter;