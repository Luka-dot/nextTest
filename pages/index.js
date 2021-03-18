import React from 'react'
import Link from 'next/link'

import About from './about'

function HomePage () {
    return (
        <div>
            <h2>hi</h2>
            <Link href='/about'><button onClick={About} > About </button></Link>
            <ul>
                <li>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link href='/clients'>Clients</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage