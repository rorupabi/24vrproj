import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import video5 from '../assets/video5.mp4'
import video6 from '../assets/video6.mp4'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Virtual Reality a building tool
        <span className='bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text'>
          {" "}for developers</span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Unleash your creativity and bring your VR app ideas to life with our user-friendly development tools. Start today and transform your imagination into an immersive experience!</p>
      <div className="flex justify-center my-10">
        <a href="#" className='bg-blue-500 py-2 px-4 mx-3 rounded-md text-white font-semibold hover:bg-blue-800 duration-300'>Start for free</a>
        <a href="#" className='py-2 px-4 mx-3 rounded-md border hover:bg-gray-300 duration-300'>Documentation</a>
      </div>
      <div className='flex flex-col md:flex-row justify-center max-w-6xl mx-auto w-full'>
        <div className='md:w-1/2 p-2 h-64 md:h-80 hover:scale-105 duration-300 ease-in-out'>
          <video
            autoPlay
            loop
            muted
            className='rounded-md w-full h-full object-cover border border-neutral-200 shadow-sm'>
            <source src={video3} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='md:w-1/2 p-2 h-64 md:h-80 hover:scale-105 duration-300 ease-in-out'>
          <video
            autoPlay
            loop
            muted
            className='rounded-md w-full h-full object-cover border border-neutral-200 shadow-sm'>
            <source src={video4} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center max-w-6xl mx-auto w-full'>
        <div className='md:w-1/2 p-2 h-64 md:h-80 hover:scale-105 duration-300 ease-in-out'>
          <video
            autoPlay
            loop
            muted
            className='rounded-md w-full h-full object-cover border border-neutral-200 shadow-sm'>
            <source src={video5} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='md:w-1/2 p-2 h-64 md:h-80 hover:scale-105 duration-300 ease-in-out'>
          <video
            autoPlay
            loop
            muted
            className='rounded-md w-full h-full object-cover border border-neutral-200 shadow-sm'>
            <source src={video6} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;


