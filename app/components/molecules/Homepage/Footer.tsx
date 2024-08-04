import React from 'react';
import { FaFacebook, FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
        
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">fabiel.one</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <a href="/services/webdevelopment" className="hover:underline">Web Development</a>
                </li>
                <li className="mb-1">
                  <a href="/services/onlinemarketing" className="hover:underline">Online Marketing</a>
                </li>
                <li className="mb-1">
                  <a href="/services/aiconsulting" className="hover:underline">AI Consulting</a>
                </li>
                <li className="mb-1">
                  <a href="/services/hosting" className="hover:underline">Hosting</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Blog</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <a href="/blog/life" className="hover:underline">life</a>
                </li>
                <li className="mb-1">
                  <a href="/blog/coding" className="hover:underline">coding</a>
                </li>
                <li className="mb-1">
                  <a href="/blog/gaming" className="hover:underline">gaming</a>
                </li>
                <li className="mb-1">
                  <a href="/blog/business" className="hover:underline">business</a>
                </li>
                <li className="mb-1">
                  <a href="/blog/easycash" className="hover:underline">easycash</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/privacy" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a href="https://flowbite.com/" className="hover:underline">Fabiel.One™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaFacebook className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaDiscord className="w-4 h-4" />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaGithub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
