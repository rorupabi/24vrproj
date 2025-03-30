import React from 'react'
import { features } from '../constants/index.jsx'

const featuresSection = () => {
  return (
    <div className='relative mt-10 min-[800px]'>
      <div className="text-center">
        <span className='text-blue-500 h-2 text-lg font-medium px-2 py-1 uppercase'>
          features
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide'>Easily build <span className='text-blue-500'>your code</span></h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, index) => (
          <div key={index} className='w-full sm:1/2 lg:w-1/3'>
            <div className='flex'>
              <div className='flex h-10 w-10 text-blue-500 justify-center items-center rounded-full'>
                {feature.icon}
              </div>
              <div>
                <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                <p className='text-md p-2 mb-12 text-neutral-500'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default featuresSection