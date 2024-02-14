import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import myImage from '../assets/myImage.jpeg';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Backend Developer</h2>
                    <p className='text-gray-500 py-4 max-w-lg'>
                        I have a year of experience in building and designing web applications. I love to work on web applications using technologies like React, tailwind, ASP .Net and MSSQl.
                    </p>
                    <div>
                        <Link to='Projects' smooth duration={700} className='group text-white w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Projects
                            <span className='group-hover:rotate-90 duration-300'><RiArrowRightSLine size={(25)}/></span>
                        </Link>
                    </div>
                </div>

                <div>
                     <img src={myImage} alt='my profile'  className='rounded-2xl mx-auto w-2/3 md:w-full'/>
                </div>
            </div>
        </div>

    )
}

export default Home