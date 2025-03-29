import Logo from '../assets/empty_dashboard_24dp_5084C1_FILL0_wght400_GRAD0_opsz24.svg'
import { navItems } from '../constants/index.jsx'
import { Menu, X } from "lucide-react"
import { useState } from 'react'

const Navbar = () => {
  const [mobileDrawOpen, setMobileDrawOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawOpen(!mobileDrawOpen);
  }
  return (
    <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Left Section: Logo and Nav Items */}
          <div className="flex items-center">
            <img src={Logo} className='w-7' alt="logo" />
            <span className="text-xl tracking-tight text-black hover:text-gray-500 duration-300 cursor-pointer">
              <span className="text-blue-500">24</span>VR
            </span>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Auth Buttons */}
          <div className="hidden lg:flex space-x-4">
            <a href="#" className='py-2 px-3 border rounded-lg hover:bg-gray-300 duration-300'>
              Sign In
            </a>
            <a href="#" className='bg-blue-500 text-white hover:bg-blue-700 duration-300 py-2 px-3 border-0 rounded-lg'>
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className=" hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index} className='py-4 '>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className='py-2 px-3 border rounded-lg'>
                Sign-in
              </a>
              <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-lg'>
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
