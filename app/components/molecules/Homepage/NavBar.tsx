import { Link, useLocation } from '@remix-run/react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { User } from '~/models/user.server';

const getSubMenuItems = (pathname: string) => {
  switch (pathname) {
    case '/':
      return [
        { name: 'Projects', path: '/projects' },
        { name: 'Services', path: '/projects' },
        { name: 'Classes', path: '/classes' },
        { name: 'Blog', path: '/blog' },
      ];
    case '/about':
      return [
        { name: 'Category 1', path: '/bus/category1' },
        { name: 'Category 2', path: '/bus/category2' },
        { name: 'Category 3', path: '/bus/category3' },
      ];
    // Add more cases for other routes as needed
    default:
      return [];
  }
};

export const NavBar = ({ user }: { user: User | undefined }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const subMenuItems = getSubMenuItems(location.pathname);
  const isHomePage = location.pathname === '/';

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <nav className={`w-full z-10 ${isHomePage ? 'absolute top-0 left-0 bg-transparent' : 'relative bg-white shadow-md'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className={`self-center text-2xl font-bold whitespace-nowrap ${isHomePage ? 'text-white text-shadow-custom' : 'text-black'}`}>fabiel.one</span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded={isDrawerOpen}
                onClick={toggleDrawer}
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user" />
              </button>
            ) : (
              <>
                <Link to="/login" className="text-sm font-bold text-gray-500 drop-shadow-md">Login</Link>
                <span className="text-sm text-white font-bold"> | </span>
                <Link to="/join" className="text-sm font-bold text-gray-500">Sign Up</Link>
              </>
            )}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded={isDrawerOpen}
              onClick={toggleDrawer}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu className="w-6 h-6 text-current text-shadow-custom" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              </li>
              <li>
                <Link to="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${isHomePage ? 'bg-transparent' : 'bg-white'} py-2`}>
          <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4">
            {subMenuItems.map((item) => (
              <Link key={item.path} to={item.path} className={`text-shadow-custom hover:underline px-3 py-2 ${isHomePage ? 'text-white dark:text-white' : 'text-black dark:text-black'}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {isDrawerOpen ? <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20" onClick={closeDrawer}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="p-4">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={closeDrawer}
              >
                <span className="sr-only">Close menu</span>
                ✕
              </button>
            </div>
            <ul className="flex flex-col font-medium p-4 space-y-4">
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={closeDrawer}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={closeDrawer}>About</Link>
              </li>
              <li>
                <Link to="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={closeDrawer}>Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={closeDrawer}>Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={closeDrawer}>Contact</Link>
              </li>
            </ul>
          </div>
        </div> : null}
    </>
  );
};
