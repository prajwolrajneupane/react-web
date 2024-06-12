import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
function HeroSection() {
  return (
    <div>
   <div className="flex flex-col items-center mt-6 lg:mt-20">

    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    Unleash Your Power and become
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> MIGHTY</span>
    </h1>
    <p className='mt-5 ml-10 mr-10 flex justify-center text-center'>Step into a world of top-notch facilities, expert trainers, and a community that motivates you to be your best. Start your journey to a healthier, stronger you today!</p>
 <div className="flex justify-center my-10">

    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3  rounded'>Gym near me</a>


    <a href="#" className='py-3 border p-2 rounded'> View Gallery</a>
 </div>
 <div className="flex mt-10 mr-20 ml-20 justify-center gap-10">

    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700' src={video1}></video>
    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700' src={video2}></video>

 </div>
   </div>
    </div>
  )
}

export default HeroSection
