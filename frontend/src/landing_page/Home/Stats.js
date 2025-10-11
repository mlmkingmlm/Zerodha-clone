import React from 'react'
import { Link } from 'react-router-dom'

function Stats() {
    return (
        <>
            <div className='container mt-5 mb-5'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <h4 className='mb-5'>Trust with confidence</h4>
                        <h5 className='text-secondary mt-5'>Customer-first always</h5>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.

                        </p>
                        <h5 className='text-secondary mt-5'>No spam or gimmicks</h5>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                        <h5 className='text-secondary mt-5'>The Zerodha universe</h5>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                        <h5 className='text-secondary mt-5'>Do better with money</h5>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <Link to="/products"><img src="media/images/ecosystem.png" alt="" className='w-100' /></Link>
                        <Link to="/products" className='mx-5 text-decoration-none fw-bold'>Explore Our Products <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to="/demo" className=' text-decoration-none fw-bold'>Try Kit Demo <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row align-items-center text-center pb-5">
                    <Link to="/"><img src="media/images/press-logos.png" alt="" className='w-75 mt-5' style={{ cursor: "pointer" }} /></Link>
                </div>
            </div>
        </>
    )
}

export default Stats
