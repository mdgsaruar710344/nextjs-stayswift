export function setPriceRangeValues(priceRange){
  const ranges={
    range1:[0,999],
    range2:[1000,1999],
    range3:[2000,2999],
    range4:[3000,3999],
    range5:[4000,4999],
    range6:[5000,100000]
  }
if (priceRange?.length>0) {
 const replacedArray= priceRange.map(range=>ranges[range]);
 const flatArray=replacedArray.flat();
 const highestPrice=Math.max(...flatArray);
 const lowestPrice=Math.min(...flatArray);
 const highAndLowRange={
          high:highestPrice,
          low:lowestPrice
          }
     return highAndLowRange;     
}
else {
  return null;
}
}