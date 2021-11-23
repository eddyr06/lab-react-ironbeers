import React from 'react'
import { Link } from 'react-router-dom'


const NewBeer = () => {
    return (
        <div>
            <header className='home-icon'>
            <Link to='/'>Home</Link><br/>
            </header>
            <h1>NewBeer</h1>
        </div>

    )
}

export default NewBeer