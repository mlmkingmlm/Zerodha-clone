import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
    return (
        <>
        <div className="container pt-5">
            <div className="row align-items-center text-center pt-5">
                <h3 className='text-secondary'>404 Page Not Found</h3>
                <p className='mt-3 fs-5'>We couldn’t find the page you were looking for. Visit <Link to="/" className='text-decoration-none'>Zerodha’s home page</Link></p>
            </div>
        </div>
        </>
    )
}

export default NotFound
