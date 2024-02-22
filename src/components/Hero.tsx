import React from 'react'
import HighLightItem from './HighLightItem'

const Hero = () => {
  return (
    <section className='relative h-screen flex flex-col justify-center'>
      {/* Navbar*/}
      {/* Background Video*/}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-black/30 z-10'/>
<video className='w-full h-full object-cover' autoPlay muted loop>
    <source src='/hero-video.mp4' type='video/mp4'/>
</video>
      </div>
      {/* Text Content*/}
      <div className='flex flex-col items-center gap-24'>
        <div className='flex flex-col items-center gap-8'>
            <h1 className='text-6xl max-w-[15ch] text-center font-serif'>Experience the draw of Gravity.</h1>
            <p>Redefining the future of SUVs.</p>
            <button className='bg-white text-black uppercase px-6 py-2 rounded-md hover:bg-white/70'>Stay informed</button>
        </div>
        <div className='flex justify-between w-3/5 max-w-[900px]'>
            <HighLightItem title='Project Range' content='Over 440 mi'/>
            <HighLightItem title='Peak Power' content='Over 800hp'/>
            <HighLightItem title='Seating' content='Up to 7'/>
            <HighLightItem title='0-60 mph' content='Under 3.5secs'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
