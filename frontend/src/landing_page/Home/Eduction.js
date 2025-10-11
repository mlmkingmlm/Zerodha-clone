import React from 'react'
import { Link } from 'react-router-dom'

function Eduction() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/"><img src="media/images/index-education.svg" alt="" className='w-75 mt-5' style={{ cursor: "pointer" }} /></Link>
                    </div>

                    <div className="col-md-6 mt-5 pt-5">
                        <h3>Free and open market education</h3>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <Link className='text-decoration-none'>Varsity <i className="fa-solid fa-arrow-right"></i></Link>
                        <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <Link className='text-decoration-none'>TradingQ&A <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eduction
