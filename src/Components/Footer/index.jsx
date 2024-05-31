import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/small-logo.png";

function Footer() {
  return (
    <footer className="w-full text-blue-500">
      <div className="pt-16 pb-12 text-sm border-t border-blue-200 bg-blue-50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-3 gap-6 md:grid-cols-6 lg:grid-cols-9">
            <nav className="col-span-2 md:col-span-4 lg:col-span-3">
              <h3 className="mb-6 text-base font-medium text-blue-700">
                Product
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <NavLink
                    to="/features"
                    className="transition-colors duration-300 hover:text-blue-100 focus:text-blue-50">
                    Features
                  </NavLink>
                </li>
              </ul>
            </nav>
            <nav className="col-span-2 md:col-span-4 lg:col-span-3">
              <h3 className="mb-6 text-base font-medium text-blue-700">
                About Us
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <NavLink
                    to="/about"
                    className="transition-colors duration-300 hover:text-blue-100 focus:text-blue-50">
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
            <nav className="col-span-2 md:col-span-4 lg:col-span-3">
              <h3 className="mb-6 text-base font-medium text-blue-700">
                Get in touch
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <NavLink
                    to="/contact"
                    className="transition-colors duration-300 hover:text-blue-100 focus:text-blue-50">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section className="py-4 text-sm border-t border-blue-200/90 bg-blue-100/80">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-4 gap-3 md:grid-cols-8 lg:grid-cols-12">
            <img
              className="h-6 w-6 justify-self-end"
              src={Logo}
              alt="logo"></img>
            <p className="col-span-2 md:col-span-4 lg:col-span-6">
              &copy; 2024 The ShopNet. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
