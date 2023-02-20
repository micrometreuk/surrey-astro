
import React from 'react'


const Cctv = () => {
  return (

    <div className=" bg-white  dark:bg-gray-800  relative mx-auto w-full mt-10  max-w-7xl">
      <div className="flex flex-col">

        {/* :AVANTAGES */}
        <div className="dark:text-slate-200 order-last md:order-first grid grid-cols-1 md:grid-cols-3 border-0 md:border-2 border-gray-100">
          {/* ::Download App */}
          <p className="col-span-1 py-5 px-4 flex flex-col justify-center items-center text-center">
            <span className="text-base  font-semibold">
              We offer cctv and intruder alarms for domestic and commercial properties
            </span>
          </p>
          {/* ::Newsletter */}
          <p className="col-span-1 py-5 px-4 flex flex-col justify-center items-center border-t-2 border-b-2 md:border-0 md:border-l-2 md:border-r-2 border-gray-100 text-center">
            <span className="text-base  font-semibold">
              Intruder alarms for all your properties windows doors and access points.
            </span>
          </p>
          {/* ::Exchange */}
          <p className="col-span-1 py-5 px-4 flex flex-col justify-center items-center text-center">
            <span className="text-base  font-semibold">
              Outdoor Sensored lighting including PIR and photocell sensors.
            </span>
          </p>
        </div>


        {/* :MAIN */}
        <div className=" dark:bg-gray-800 dark:text-slate-200 order-first md:order-last relative flex bg-gray-100">
          {/* ::Promo Infos */}
          <div className="relative z-10 py-10 sm:py-20 md:py-40 px-4 sm:pl-10 w-full md:w-1/2 flex flex-col items-start space-y-5">
            {/* :::title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-extrabold tracking-wide">
              <span className="block">CCTV Systems </span>
              <span className="block">and Intruder alarms</span>
            </h2>
            {/* :::text */}
            <p className="max-w-lg text-sm sm:text-base lg:text-lg md:text-gray-500 font-medium">
              At Surrey Electrical and Car Charging LTD 
              <br />
              we understand how important people's homes are to them and their families. 
              <br />
              So offering the service of intruder alarms and cctv we can help people feel safe in their homes whilst there and away.
            </p>
          </div>
          {/* ::Illustration */}
          <div className="absolute md:relative inset-0 w-full md:w-1/2">
            <img src="/cctv1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <span className="absolute inset-0 block md:hidden w-full h-full bg-white opacity-70" />
          </div>
        </div>

      </div>
    </div>


  )
}

export default Cctv
