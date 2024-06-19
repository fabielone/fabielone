import { Link } from '@remix-run/react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import  {User}  from "~/models/user.server";

export default function Navabar2 ({ user }: { user: User | undefined }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    //const location = useLocation();
    //const subMenuItems = getSubMenuItems(location.pathname);
    return (
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-sm">
        <div className="flex-1 flex justify-between items-center mix-blend-screen">
          <a href="/" className="text-4xl text-gray-400 font-extrabold">F</a>
        </div>

          <FaBars className="fill-current text-gray-600" />
        
        <input className="hidden" type="checkbox" id="menu-toggle" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />

        <div className={`md:flex md:items-center md:w-auto w-full ${menuOpen ? '' : 'hidden'}`} id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0">
              <li><a className="md:p-4 py-3 px-0 block" href="/">Home</a></li>
              <li><a className="md:p-4 py-3 px-0 block" href="/">Services</a></li>
              <li><a className="md:p-4 py-3 px-0 block" href="/">About Us</a></li>
              <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/">Contact</a></li>
            </ul>
          </nav>
          {user ? (
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user" />
            </button>
          ) : (
            <Link to="/login" className="text-sm text-gray-900 dark:text-white">Login</Link>
          )}
          {isDropdownOpen ? <div
              className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0 mt-2"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div> : null}
        </div>
      </header>
  );
}