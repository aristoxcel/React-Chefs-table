import { CiSearch } from "react-icons/ci";
export default function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box w-52 text-base">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div> 
    <a className="btn btn-ghost text-3xl text-gray-900 pt-1  hidden lg:block md:block">Chefs Tables</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base">
         <li><a >Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
      <label className="input input-bordered flex items-center gap-2 rounded-full bg-gray-50 mr-4">
      <CiSearch />
      <input type="text" className="lg:grow shrink-0" placeholder="Search" />
      </label>
    <img className="bg-[#0BE58A] rounded-3xl p-2"  src="https://i.ibb.co/gtjV9vp/profile.png" alt="" />
  </div>
</div>

<div><a className="btn btn-ghost text-4xl text-gray-900 lg:hidden md:hidden mt-4">Chefs Tables</a></div>
    </div>
  )
}
