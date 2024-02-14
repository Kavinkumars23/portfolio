import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://linkedin.com'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:kavinkumarsubramaniam23@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            download: true
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(link => (
                    <li key={link.id} className='flex justify-between items-center w-40 h- h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] duration-500 hover:rounded-md bg-gray-500'>
                        <a href={link.href}
                            className='flex justify-between items-center w-full text-white' 
                            download={link.download}
                            rel="noreferrer"
                            target='_blank'>
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks