import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';

import reactParallax from '../assets/portfolio/reactParallax.jpg';



const Projects = () => {

    const projects = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: reactParallax
        }
    ]

    return (
        <div name="Projects"
            className='bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white min-h-screen w-full'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-15'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Projects</p>
                    <p className='py-6'>Check out my projects right here</p>
                </div>
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(project => (

                        <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg '>
                            <img src={project.src} alt='' className='rounded-md duration-300 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Code</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects