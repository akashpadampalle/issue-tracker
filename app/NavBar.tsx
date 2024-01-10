'use client';


import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation"
import { AiFillBug } from "react-icons/ai"
import classNames from 'classnames'; // simplify applying dynamic classes

const NavBar = () => {

    const currentPath = usePathname();

    // to reduce the duplication of code: mapping links to object
    const links = [
        { label: 'dashboard', href: '/' },
        { label: 'issues', href: '/issues' }
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-16 items-center'>
            <Link href='/'><AiFillBug /></Link>
            <ul className='flex space-x-6'>
                {
                    links.map((link, index) =>
                        <li key={index}>
                            <Link href={link.href}
                                className={
                                    classNames({
                                        'text-zinc-900': link.href === currentPath,
                                        'text-zinc-500': link.href !== currentPath,
                                        'hover:text-zinc-800 transition-colors': true
                                    })
                                }
                            >{link.label}</Link>
                        </li>
                    )
                }
            </ul>
        </nav >
    )
}

export default NavBar