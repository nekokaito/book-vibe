import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Listed = () => {
     
      const [active, setActive] = useState('tab-1');

      const isActive = (tab) => {
        setActive(tab);
        console.log(active)
      }

    return (
        <div>
              <div className="h-28 w-full bg-[#1313131a] rounded-3xl flex justify-center items-center"><h1 className="text-3xl font-extrabold ">Books</h1></div>
             <div className="flex justify-center items-center my-10">
             <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
    </div>
</div>
   <div>
   <div role="tablist" className="tabs tabs-lifted">
  <NavLink to="/listed/read" onClick={() => isActive('tab-1')} role="tab" className={`tab ${active === 'tab-1'? 'tab-active': ''} `}>Read Books</NavLink>
  <NavLink to="/listed/wishlist"  onClick={() => isActive('tab-2')} role="tab" className={`tab ${active ==='tab-2'? 'tab-active': ''}`}>Wishlists Books</NavLink>
  <Outlet></Outlet>  
</div>
   </div>
        </div>
    );
};

export default Listed;