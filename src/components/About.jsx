

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#2d3033] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-red-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font bold'>
                            <p>Hi. I'm Jorge nice to meet you please take a look at my projects. </p>
                        </div>
                        <div>
                            <p>
                                I am passionate about coding and web development and I want create beautiful software for small business clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        
    )
}

export default About