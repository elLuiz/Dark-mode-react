import React from 'react'
import { Link } from 'react-router-dom';


export default function Links() {
    return (
        <div className="links">
            <Link to="#card">Card</Link>
            <Link to="#carousel">Carousel</Link>
            <Link to="#modal">Modal</Link>
        </div>
    )
}
