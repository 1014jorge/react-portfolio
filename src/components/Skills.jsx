import React from 'react'

import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] text-gray-300 py-4'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
                    <p className='py-4'>These are the technoligies ive learned.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx auto' src='{HTML}' alt='HTML icon' />
                        <p>HTML</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;