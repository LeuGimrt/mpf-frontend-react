import React from 'react'
import { Link } from 'react-router-dom';



function HomePage() {
    return (
        <>
            Home Page -
            <Link to="/login">Login</Link> -
            <Link to="/register">registro</Link>
        </>
    )
}

export default HomePage
