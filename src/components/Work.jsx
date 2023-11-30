import React from 'react'
import WeatherImg from '../assets/weatherappimg.png'
import WorkdayImg from '../assets/workdayimg.png'
import JavaQuizimg from '../assets/javaquizimg.png'
import PasswordGenImg from '../assets/passwordgenimg.png'
import NoteTakerimg from '../assets/NoteTakerimg.png'
import KitchenRepo from '../assets/KitchenRepo.gif'


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</p>
                    <p className='py-6'>// Check out some of my projects</p>
                </div>
                {/* Button container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid */}
                    <div style={{ backgroundImage: `url(${WorkdayImg})` }} className='shadow-lg shadow-[#040c16] group countainer rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Workday Scheduler
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://1014jorge.github.io/Work-Day-Planner/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                                </a>
                                <a href="https://github.com/1014jorge/Work-Day-Planner/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> GitHub

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${JavaQuizimg})` }} className='shadow-lg shadow-[#040c16] group countainer rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Javascript Quiz
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://1014jorge.github.io/Quiz-Challenge/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                                </a>
                                <a href="https://github.com/1014jorge/Quiz-Challenge">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> GitHub

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WeatherImg})` }} className='shadow-lg shadow-[#040c16] group countainer rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://1014jorge.github.io/Multi-City-Weather-Dashboard/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                                </a>
                                <a href="https://github.com/1014jorge/Multi-City-Weather-Dashboard/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> GitHub

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${PasswordGenImg})` }} className='shadow-lg shadow-[#040c16] group countainer rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Password Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://1014jorge.github.io/JavaScript-Challenge-3/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                                </a>
                                <a href="https://github.com/1014jorge/JavaScript-Challenge-3/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> GitHub

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${NoteTakerimg})` }} className='shadow-lg shadow-[#040c16] group countainer rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Note Taker App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://taking-notes2023-642249d92aed.herokuapp.com/notes">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                                </a>
                                <a href="https://github.com/1014jorge/Note-Taker2023">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> GitHub

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${KitchenRepo})` }} className='shadow-lg shadow-[#040c16] group countainer rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Everything but the Kitchen Sink
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://rambriz91.github.io/kitchen-repo/ ">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                                </a>
                                <a href=" https://github.com/rambriz91/kitchen-repo">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> GitHub

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work