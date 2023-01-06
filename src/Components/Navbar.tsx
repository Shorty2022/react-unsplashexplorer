import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-slate-200 pl-10 pb-3">
      <header>
        <h1 className="font-bold text-2xl">Unsplash Explorer</h1>
      </header>

      <NavLink to="/latest"
              className={({isActive}) => isActive ? "border-b-2 border-solid border-cyan-600 mr-5 font-bold uppercase" : 
              "mr-5 uppercase"}>Latest</NavLink>

      <NavLink to="/popular"
                className={({isActive}) => isActive ? "border-b-2 border-solid border-cyan-600 font-bold uppercase" : 
                "uppercase"}>Popular</NavLink>
    </div>
  );
}