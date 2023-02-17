
import React from 'react'


const Cctv = () => {
  return (
    
    <div className="relative mx-auto w-full max-w-7xl bg-white">
      <div className="flex flex-col">

        {/* :AVANTAGES */}
        <div className="order-last md:order-first grid grid-cols-1 md:grid-cols-3 border-0 md:border-2 border-gray-100">
          {/* ::Download App */}
          <p className="col-span-1 py-5 px-4 flex flex-col justify-center items-center text-center">
            <span className="text-sm text-gray-500 font-medium">Download the app</span>
            <span className="text-base text-gray-800 font-semibold">Get an exclusive $15 off code</span>
          </p>
          {/* ::Newsletter */}
          <p className="col-span-1 py-5 px-4 flex flex-col justify-center items-center border-t-2 border-b-2 md:border-0 md:border-l-2 md:border-r-2 border-gray-100 text-center">
            <span className="text-sm text-gray-500 font-medium">Sign up for our newsletter</span>
            <span className="text-base text-gray-800 font-semibold">10% off your first order</span>
          </p>
          {/* ::Exchange */}
          <p className="col-span-1 py-5 px-4 flex flex-col justify-center items-center text-center">
            <span className="text-sm text-gray-500 font-medium">You don't like it, get another one</span>
            <span className="text-base text-gray-800 font-semibold">30 days of free exchange</span>
          </p>
        </div>


        {/* :MAIN */}
        <div className="order-first md:order-last relative flex bg-gray-100">
          {/* ::Promo Infos */}
          <div className="relative z-10 py-10 sm:py-20 md:py-40 px-4 sm:pl-10 w-full md:w-1/2 flex flex-col items-start space-y-5">
            {/* :::title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-extrabold tracking-wide">
              <span className="block">Final Stock.</span>
              <span className="block">Up to 60% off!</span>
            </h2>
            {/* :::text */}
            <p className="max-w-lg text-sm sm:text-base lg:text-lg text-gray-600 md:text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deserunt ea rem facilis, sint animi perspiciatis quibusdam quam in optio tempore similique.</p>
            {/* :::button */}
            <a href="#lin" className="py-2 px-6 rounded bg-indigo-500 text-sm sm:text-base text-white font-semibold hover:bg-indigo-400">Shop the sale</a>
          </div>
          {/* ::Illustration */}
          <div className="absolute md:relative inset-0 w-full md:w-1/2">
            <img src="https://fancytailwind.com/static/tablets1-2159571f573820dadb76416114b85465.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <span className="absolute inset-0 block md:hidden w-full h-full bg-white opacity-70" />
          </div>
        </div>

      </div>
    </div>


  )
}

export default Cctv
