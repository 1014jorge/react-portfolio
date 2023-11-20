import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* COntainer */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
          <p>Hi Myname is</p>
          <h1>Jorge Gonzalez</h1>
          <h2>I'm a Full Stack Developer.</h2>
          <p>i am a full stack developer focusing on my practicing my new coding skills.</p>

        </div>
    </div>
  )
}

export default Home