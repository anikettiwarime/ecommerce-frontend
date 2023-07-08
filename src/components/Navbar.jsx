import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      path: "/",
      name: "home",
    },
    {
      id: 2,
      path: "about",
      name: "about",
    },
    {
      id: 3,
      path: "products",
      name: "products",
    },
    {
      id: 4,
      path: "contact",
      name: "contact",
    },
    {
      id: 5,
      path: "cart",
      name: <FiShoppingCart />,
    },
  ];

  return (
    <section className="flex justify-between items-center h-20  px-4 w-full bg-blue-100">
      <div>
        <h1 className="text-4xl font-signature ml-2">AniketShop</h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, path, name }) => (
          <li key={id}>
            <NavLink
              to={path}
              className="px-10 capitalize font-medium hover:text-blue-500 hover:scale-150  duration-300 cursor-pointer text-lg"
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden pr-4 z-10 cursor-pointer"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col  items-center justify-evenly absolute top-4   left-0 w-full h-screen">
          {links.map(({ id, path, name }) => (
            <li key={id} className="">
              <NavLink
                to={path}
                onClick={() => setNav(false)}
                className="px-4 cursor-pointer capitalize text-4xl"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Navbar;
