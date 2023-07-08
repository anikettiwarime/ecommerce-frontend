import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="max-w-[60vw] grid grid-cols-2 bg-blue-100 mx-auto  gap-4 py-12 px-24 rounded-lg translate-y-[50%]">
        <div>
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div>
        <div className=" justify-self-end self-center   ">
          <NavLink
            to="/contact"
            className="bg-gradient-to-r text-white from-cyan-500 to-blue-400 py-4 px-8 font-medium flex hover:scale-95"
          >
            Get Started
          </NavLink>
        </div>
      </div>

      {/* Main Footer Start */}
      <footer>
        <div className="container grid grid-cols-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
