import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'

export default function Header() {
    return (
        <div className='header'>
            <Navbar />
            <Intro />
        </div>
    )
}
