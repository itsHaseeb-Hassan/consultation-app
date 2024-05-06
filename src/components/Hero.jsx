import React from 'react'

const Hero = () => {
  return (
    <div className="bg-heroSection w-full h-[90vh]">
        <div className='flex  justify-end mr-20 h-full  '>
            <div className='flex flex-col justify-center w-[400px] '>
     <div className='text-[35px] font-bold text-[#4C84C3]'>Instant Consultation with Trusted Doctors</div>
     <button className="bg-[#4C84C3] my-10 text-white w-[250px] h-[35px] mx-auto border border-[#4C84C3] font-normal  rounded-md">
          Book Online Consulation
        </button>
        </div>
        </div>
    </div>
  )
}

export default Hero