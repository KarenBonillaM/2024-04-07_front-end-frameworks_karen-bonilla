import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useProductStore from "../../store";
import Logo from "../../Images/the-shopNet-logo.png";
import SmallLogo from "../../Images/small-logo.png";

function Nav({ onSearch }) {
  const { getTotalNumberOfItemsInCart } = useProductStore();

  return (
    <nav className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-7xl xl>max-w-7xl 2xl:max-w-[96rem]">
        <div className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700">
          <NavLink
            to="/"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1">
            <img
              src={Logo}
              alt="The ShopNet Logo"
              className="h-12 w-25 hidden md:block"
            />
            <img
              src={SmallLogo}
              alt="The ShopNet Logo"
              className="h-12 w-25 md:hidden"
            />
          </NavLink>
          <ul className="flex absolute left-0 top-0 z-[-1] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100">
            <li className="flex items-stretch">
              <NavLink
                to="/contact"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 focus:outline-none focus-visible:outline-none px- text-2xl font-semibold">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
            <NavLink
              to="/checkout"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-blue-500">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="h-7 w-7 hover:text-blue-800"
              />
              <div className="absolute -right-2 -top-2 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">
                {getTotalNumberOfItemsInCart()}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
