import { Link, useLocation } from '@remix-run/react';
//import Avatar from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { User } from '~/models/user.server';

const MenuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services', path: '/services', subMenu: [
      { name: 'Web Development', path: '/services/webdevelopment' },
      { name: 'Online Marketing', path: '/services/onlinemarketing' },
      { name: 'AI Consulting', path: '/services/aiconsulting' },
      { name: 'Hosting', path: '/services/hosting' },
    ]
  },
  { name: 'Classroom', path: '/classroom', },
  { name: 'Blog', path: '/blog' },
  { name: 'Store', path: '/store' },
];




const getSubMenuItems = (pathname: string) => {
  switch (pathname) {
    case '/':
      return [
        { name: 'Projects', path: '/projects' },
        { name: 'Services', path: '/services' },
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

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  //dropdown is null or string 
  const [dropdown, setDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  
const handleDropdownToggle = (name: string) => {
  setDropdown(dropdown === name ? null : name);
};

const handleMouseEnter = () => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
};

const handleMouseLeave = () => {
  timeoutRef.current = window.setTimeout(() => {
    setDropdown(null);
  }, 200);
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.relative')) {
    setDropdown(null);
  }
};

useEffect(() => {
  if (dropdown) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [dropdown]);

  return (
    <>
      <nav className={`w-full z-10`}>
        <div className=" bg-slate-900 shadow-sm max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
       
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://fabielone.s3.us-west-1.amazonaws.com/portfolio/logo.png" alt="Fabiel" className="w-10 h-10 rounded-full" />
            <span className={`self-center text-slate-200 shadow-xl text-2xl font-bold whitespace-nowrap`}>FABIEL.ONE</span>
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
               
              </button>
            ) : (
              <>
                <Link to="/login" className="text-sm font-bold text-gray-500 drop-shadow-md">Login</Link>
                <span className="text-sm text-gray-500 font-bold"> | </span>
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
            
            <ul className="flex space-x-4">
        {MenuItems.map((item) => (
          <li
            key={item.name}
            className="relative"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            
            
          >
            {!item.subMenu ? (
              <Link to={item.path} className="text-white">
                {item.name}
              </Link>
            ) : (
              <button className="text-white cursor-pointer"
              onClick={() => handleDropdownToggle(item.name)}>
                {item.name}
              </button>
            )}
            {item.subMenu && dropdown === item.name ? <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul> : null}
          </li>
        ))}
      </ul>
          </div>
        </div>
        <div className={`bg-transparent`}>
          <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4">
            {subMenuItems.map((item) => (
              <Link key={item.path} to={item.path} className={`text-white text-shadow-custom hover:underline px-3 py-2 `}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

       {/* Drawer for mobile */}
     <div className={`fixed inset-0 z-40 ${isDrawerOpen ? 'block' : 'hidden'}`} role="dialog">
        <button className="fixed inset-0 bg-gray-800 bg-opacity-50" onClick={closeDrawer}></button>
        <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 overflow-y-auto transform transition-transform duration-300 ease-in-out">
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
            {MenuItems.map((item) => (
              <Link key={item.path} to={item.path} className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`} onClick={closeDrawer}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>

    
    {/* Drawer component */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
                    isDrawerOpen ? '' : '-translate-x-full'
                } bg-white w-64 dark:bg-gray-800`}
                tabIndex={-1}
                aria-labelledby="drawer-navigation-label"
            >
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                    Menu
                </h5>
                <button
                    type="button"
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeDrawer}
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                    {subMenuItems.map((item) => (
              <Link key={item.path} to={item.path} className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`} onClick={closeDrawer}>
                {item.name}
              </Link>
            ))}
                    </ul>
                </div>
            </div>
    </>
  );
};
