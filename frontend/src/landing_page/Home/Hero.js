import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
        <div className='container-fluid mb-5 pt-5'>
            <div className='row p-5 text-center'>
                <img src='media/images/heroImage.png' alt='hero-image' className='w-75 m-auto mb-5'/>
                <h1 className='mt-3 text-secondary'>Invest in everything</h1>
                <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup" className='btn btn-primary m-auto' style={{width:300}}>Sign Up For Free</Link>
            </div>
        </div>
        </>
    )
}

export default Hero
