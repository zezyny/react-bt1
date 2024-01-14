import React from 'react'
import Services from './Services'
import RecentWork from './RecentWork'
import TwFeed from './TwFeed'

export default function Content() {
    return (
        <div className='content'>
            <Services />
            <RecentWork />
            <TwFeed />
        </div>
    )
}
