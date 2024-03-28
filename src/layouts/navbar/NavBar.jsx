import { Link, NavLink } from "react-router-dom";
import { GiSecretBook } from "react-icons/gi";


const NavBar = () => {
    const links = <div className="md:flex gap-3">
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/listed/read">Listed Books</NavLink></li>
         <li><NavLink to="/readgraph">Pages to Read</NavLink></li>
         <li><NavLink to="/contact">Contact</NavLink></li>
         <li><NavLink to="/about">About</NavLink></li>
    </div>
    return (
        <nav className="">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        links
       }
      </ul>
    </div>
   <Link className="flex gap-2 text-2xl font-extrabold"><GiSecretBook size={30}/> BookVibe</Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="hidden lg:navbar-end gap-3">
    <a className="btn bg-[#8ed7dd] text-white">Sign In</a>
    <a className="btn bg-[#c6bff7]">Sing Up</a>
  </div>
</div>
        </nav>
    );
};

export default NavBar;