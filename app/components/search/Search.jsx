
const Search = () => {
  return (
    <div>
           <div className="lg:max-h-[250px] mt-6">
            <div id="searchParams"  className="flex  gap-5 m-4 justify-center">
            
              <div>
                <span>Destination</span>
                <h4 className="mt-2">
                  <select name="destination" id="destination">
                    <option value="Bali">Bali</option>
                    <option value="Bali">Coxs Bazar</option>
                    <option value="Bali">Sylhet</option>
                    <option value="Bali">Saint Martin</option>
                    <option value="Bali">Bali</option>
                  </select>
                </h4>

              </div>

              
              <div>
                <span>Check in</span>
                <h4 className="mt-2">
                  <input type="date" name="checkin" id="checkin"/>
                </h4>

              </div>

           
              <div>
                <span>Checkout</span>
                <h4 className="mt-2">
                  <input type="date" name="checkout" id="checkout"/>
                </h4>
              </div>
            </div>
          </div>
          <button className="search-btn align-middle text-center place-items-center">
            🔍️ Search
          </button>
    </div>
  );
};

export default Search;