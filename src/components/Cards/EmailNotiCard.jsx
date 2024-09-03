import React from 'react'

const EmailNotiCard = () => {
  return (
    <div className="px-24 max-md:px-12 max-sm:px-6 ">
      <div className="container mx-auto p-20 my-12 bg-gray-100 flex items-center gap-8 justify-between min-h-64 max-lg:flex-col max-lg:py-10 max-lg:gap-4 rounded-2xl text-center max-md:px-16 max-md:px-6">
        <h1 className='font-semibold text-3xl  max-md:text-2xl'>
        GET READY TO KNOW THE LATEST UPDATE!
        </h1>
        <p className='font-normal text-base max-lg:text-sm '>
        Join us for our latest upcoming events by subscribing us & get notified..
        </p>
        <div className='relative'>
            <input className='w-80 h-14  rounded-full focus:outline-none px-4 pb-1 max-sm:w-64' 
            placeholder='Enter email address'
            />  
            <button className='bg-purple-600  absolute text-sm  right-0 top-0 pb-1 text-white h-full w-24 rounded-full  font-normal max-sm:w-20 max-sm:text-xs'>continue</button>
        </div>
    </div>
    </div>
  )
}

export default EmailNotiCard