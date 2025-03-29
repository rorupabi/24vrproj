import Logo from '../assets/empty_dashboard_24dp_5084C1_FILL0_wght400_GRAD0_opsz24.svg'
import { navItems } from '../constants/index.jsx'
import { Menu, X } from "lucide-react"
import { useState } from 'react'

const Navbar = () => {
  const [mobileDrawOpen, setMobileDrawOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawOpen(!mobileDrawOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-2 bg-white border-b border-neutral-300">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Left Section: Logo and Nav Items */}
          <div className="flex items-center">
            <img src={Logo} className="w-7" alt="logo" />
            <span className="text-xl tracking-tight text-black hover:text-gray-500 duration-300 cursor-pointer">
              <span className="text-blue-500">24</span>VR
            </span>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:underline text-gray-700">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Auth Buttons */}
          <div className="hidden lg:flex space-x-4">
            <a href="#" className="py-2 px-3 border rounded-lg hover:bg-gray-300 duration-300">
              Sign In
            </a>
            <a href="#" className="bg-blue-500 text-white hover:bg-blue-700 duration-300 py-2 px-3 border-0 rounded-lg">
              Create an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileDrawOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 flex flex-col items-center space-y-4 lg:hidden">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-700 hover:text-blue-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 w-full items-center">
              <a href="#" className="py-2 px-3 border rounded-lg w-full text-center hover:bg-gray-300 duration-300">
                Sign-in
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-700 duration-300 py-2 px-3 border rounded-lg w-full text-center text-white">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
