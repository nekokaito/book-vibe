import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Listed = () => {
     
      const [active, setActive] = useState('tab-1');

      const isActive = (tab) => {
        setActive(tab);
    }

    return (
        <div>
              <div className="h-28 w-full bg-[#1313131a] rounded-3xl flex justify-center items-center"><h1 className="text-3xl font-extrabold ">Books</h1></div>
            
   <div>
   <div role="tablist" className="tabs tabs-lifted my-10">
  <NavLink to="/listed/read" onClick={() => isActive('tab-1')} role="tab" className={`tab ${active === 'tab-1'? 'tab-active': ''} `}>Read Books</NavLink>
  <NavLink to="/listed/wishlist"  onClick={() => isActive('tab-2')} role="tab" className={`tab ${active ==='tab-2'? 'tab-active': ''}`}>Wishlists Books</NavLink>
  <Outlet></Outlet>  
</div>
   </div>
        </div>
    );
};

export default Listed;