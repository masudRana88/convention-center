import React from 'react';
import { HiMenu } from "react-icons/hi";
const NavBar = () => {
    return (
        // <!-- Navbar -->
        <header class="bg-bgMain">
        <div class="container w-full mx-auto flex p-5 md:flex-row items-start justify-between ">
          <a href='#!' class=" mb-4 md:mb-0 md:text-2xl text-lg">
          Abacus Convention Center
          </a>
          <nav class="md:ml-auto md:flex items-center text-base justify-center hidden">
            <a href='#!' class="mr-5 ">Home</a>
            <a href='#!' class="mr-5 hover:text-gray-900 ">About Us</a>
            <a href='#!' class="mr-5 hover:text-gray-900 ">Contact</a>
            <a href='#!' class="mr-5 hover:text-gray-900 ">Subscribe</a>
          </nav>
          <button className='md:hidden' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
             <HiMenu className='p-1 text-4xl'/>
          </button>

          <div class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-[50%] bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header flex items-center justify-between p-4">
                <button type="button" class="btn-close box-content w-4 h-4 p-2  text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="px-4 py-1 w-full overflow-y-auto">
                <button type="button" class="inline-block w-full px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Home</button>
            </div>
            <div class="px-4 py-1 w-full overflow-y-auto">
                <button type="button" class="inline-block w-full px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">About Us</button>
            </div>
            <div class="px-4 py-1 w-full overflow-y-auto">
                <button type="button" class="inline-block w-full px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Contact</button>
            </div>
            <div class="px-4 py-1 w-full overflow-y-auto">
                <button type="button" class="inline-block w-full px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Subscribe</button>
            </div>
        </div>

        </div>
      </header>
//   <!-- Navbar -->
    );
};

export default NavBar;