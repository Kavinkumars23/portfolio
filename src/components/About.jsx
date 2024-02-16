import React from 'react'

const About = () => {
    return (
        <div name="about"
            className='w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-10'>
                    I am a budding software developer with a robust understanding of programming
                    languages such as React, JavaScript, HTML, CSS, Tailwind CSS, ASP.NET MVC, and MSSQL.
                    My proficiency extends beyond coding; I bring strong analytical skills and a fervent passion for problem-solving.
                    Eager to learn and grow, I thrive in dynamic environments, consistently delivering effective solutions.
                   
                </p>

                <br />

                <p className='text-xl mt-2'>
                My commitment to continuous learning fuels my adaptability, making me adept at embracing new technologies. 
                    With a focus on clean and efficient coding practices, I am poised to contribute innovative ideas and collaborate
                    seamlessly within a team. Ready to embark on a rewarding journey, I am excited about the prospect of
                    creating impactful and scalable software solutions.
                </p>
            </div>
        </div>


    )
}

export default About