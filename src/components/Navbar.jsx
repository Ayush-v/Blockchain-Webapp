import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Charts", href: "/chart" },
  { title: "Try this!", href: "/exchanges" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 z-50 w-full mx-auto backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto h-[60px] p-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="w-[40px] h-[40px]" />
        </Link>

        <button
          className="md:hidden absolute top-[4.5] right-6"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XIcon className="w-8 h-8" />
          ) : (
            <MenuAlt1Icon className="h-8 w-8" />
          )}
        </button>

        <nav
          id="primary-navigation"
          data-visible={open ? "true" : "false"}
          className="absolute top-12 right-6 md:relative md:top-0 md:right-0 flex flex-col items-center md:flex-row md:w-full w-52  shadow-lg rounded-lg mt-2 md:shadow-none divide-y md:divide-y-0 divide-gray-100 primary-navigation z-50 bg-white md:bg-transparent"
        >
          <div className="flex flex-col md:flex-row md:ml-auto md:gap-3 md:divide-y-0 divide-y divide-gray-100 w-full md:w-auto md:p-0 p-1 mb-2 md:mb-0">
            {navLinks.map((links) => {
              return (
                <NavLink
                  key={links.title}
                  to={links.href}
                  onClick={() => setOpen(!open)}
                  className="px-4 py-4"
                  style={({ isActive }) => ({
                    color: isActive ? "#2f5ce8" : "black",
                  })}
                >
                  {links.title}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
