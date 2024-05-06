import Image from 'next/image'
import React from 'react'
import { ImLocation } from "react-icons/im";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div>
           <nav className="bg-white p-4 h-[100px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          
          <Image src="/images/logo.png" width={80} height={75} />
        </div>

        {/* Search Input */}
        <div className=' border border-[#4C84C3] h-[40px] rounded-md  flex' >
          <div className='flex items-center'>
          <ImLocation className='text-[#4C84C3] ms-1'/>
          <input type='text' className='ms-2 w-[150px] h-full text-[15px] rounded-s-md focus:outline-none border-r border-[#4C84C3]' placeholder='Location'/>
          </div>
          <div className='flex items-center'>
          <FaMagnifyingGlass className='text-[#4C84C3] ms-1'/>
          <input type='text' className=' ms-2 w-[348px] h-full border-0 rounded-e-md text-[15px] focus:outline-none' placeholder='Search for Doctors,hospital & others...'/>
          </div>
         </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-dark hover:text-gray-400 transition duration-300">
            Appointments
          </a>
          <a href="#" className="text-dark hover:text-gray-400 transition duration-300">
            Consult Doctors
          </a>
          <a href="#" className="text-dark hover:text-gray-400 transition duration-300">
            Diagnostics
          </a>
        </div>

        {/* Login Button */}
        <button className="bg-white text-[#4C84C3] border border-[#4C84C3] font-normal px-4 py-2 rounded-xl">
          Login/Register
        </button>
      </div>
    </nav>
    </div>
  )
}

export default NavBar