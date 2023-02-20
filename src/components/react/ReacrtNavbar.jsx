import React, { useState } from 'react'

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full  bg-gray-50 text-gray-500 body-font mb-4 shadow-sm sticky top-0 z-40 flex-none mx-auto  transition-all ease-in duration-100 " >

      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Site logo and Name */}
        <a href="/" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
          <span className="ml-3 text-xl text-slate-500 font-semibold antialiased">
          ElectricalSurrey
          </span>
        </a>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <a href="/" className="mr-8 hover:text-indigo-500">Home</a>
          <a href="/#domestic" className="mr-8 hover:text-indigo-500">Domestic</a>
          <a href="/#car-charging" className="mr-8 hover:text-indigo-500">Car Charging</a>
          <a href="/#commercial" className="mr-8 hover:text-indigo-500">Comercial</a>
          <a href="/cctv" className="mr-8 hover:text-indigo-500">CCTV and Intruder Alarms </a>
          <a href="/#making-good" className="mr-8 hover:text-indigo-500">Making Good</a>
          <a href="#contact" className="mr-8 hover:text-indigo-500">Contact</a>
        </nav>
        {/* ::Avatar */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
        </div>
        {/* ::Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="mobile-menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-purple-500 hover:to-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-50 text-base uppercase text-center font-semibold">
          
          <a href="/#domestic" className="mr-8 hover:text-indigo-500">Domestic</a>
          <a href="/#car-charging" className="mr-8 hover:text-indigo-500">Car Charging</a>
          <a href="/#commercial" className="mr-8 hover:text-indigo-500">Comercial</a>
          <a href="/#" className="mr-8 hover:text-indigo-500">CCTV and Intruder Alarms </a>
          <a href="/#making-good" className="mr-8 hover:text-indigo-500">Making Good</a>
          <a href="#contact" className="mr-8 hover:text-indigo-500">Contact</a>

        </div>
      }
    </header>
  )
}

export default Navbar3