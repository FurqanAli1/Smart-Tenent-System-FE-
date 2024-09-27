import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-200 dark:bg-gray-800  w-full">
      <div className="container mx-auto px-12 py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            © 2024{" "}
            <a
              href="https://flowbite.com/"
              className="text-white-500 hover:underline"
            >
              Smart Tenent
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white mr-4"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white mr-4"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white mr-4"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
