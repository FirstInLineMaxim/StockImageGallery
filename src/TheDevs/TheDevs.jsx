import React from 'react'
import Ada from './Ada'
import Alessandra from './Alessandra'

import './devs.css'
import Maksim from './Maksim'
import Robert from './Robert'


export default function TheDevs() {

    return (
        <div className='theMain'>
            <h3 className="h3">The Developer of this Project</h3>
            <div className='theDevs'>
                < Alessandra/>
                <Maksim/>
                <Ada/>
                <Robert/>
            </div>
        </div>
    )
}
