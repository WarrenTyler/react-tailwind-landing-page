import { useState } from "react";
import { close, hamburgerMenu, lock, logo } from "../assets";

const Navbar = () => {
  const [isMenuDisplayed, setMenuDisplay] = useState(false);
  const toggleMenuDisplay = () => setMenuDisplay(!isMenuDisplayed);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="max-w-[600px] md:max-w-[1480px] m-auto w-full h-full flex justify-between items-center">
        <img className="h-[25px]" src={logo} alt="" />
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="flex justify-between items-center bg-transparent px-6 gap-2">
            <img src={lock} alt="" />
            Login
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20b486] text-white font-bold">
            Sign Up For Free
          </button>
        </div>
        <div className="md:hidden" onClick={toggleMenuDisplay}>
          <img src={isMenuDisplayed ? close : hamburgerMenu} alt="" />
        </div>
      </div>
      <div
        className={
          isMenuDisplayed
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
        </ul>
        <div className="flex flex-col my-4 gap-4">
          <button className="flex justify-center items-center border border-[#20b486] rounded-md bg-transparent px-6 py-4 gap-2">
            <img src={lock} alt="" />
            Login
          </button>
          <button className="px-8 py-5 rounded-md bg-[#20b486] text-white font-bold">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
