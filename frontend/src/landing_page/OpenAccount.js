import React from 'react'
import { Link } from 'react-router-dom'

function OpenAccount() {
    return (
        <>
        <div className="container mt-5 pt-5">
            <div className="row align-items-center text-center">
                <h3 className='text-secondary'>Open A Zerodha Account</h3>
                <p className='mt-3 fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup" className='btn btn-outline-primary m-auto fs-5 fw-bold mb-5' style={{width:300}}>Sign Up For Free</Link>
            </div>
        </div>
        </>
    )
}

export default OpenAccount
