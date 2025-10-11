import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className='mb-4 text-secondary'>Unbeatable Pricing</h4>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <Link className="text-decoration-none fw-bold">See Pricing <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="row">
                            <div className="col-12 col-md-4 align-items-center">
                                <div className='d-flex justify-content-center gap-1 m-auto'>
                                    <p>₹</p>
                                    <p style={{ fontSize: 80, marginTop: -40, color: "orange" }} className='position-relative fw-bold'>0</p>
                                    <p>Free Account Opening</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 align-items-center">
                                <div className='d-flex justify-content-center gap-1 m-auto'>
                                    <p>₹</p>
                                    <p style={{ fontSize: 80, marginTop: -40, color: "orange" }} className='position-relative fw-bold'>0</p>
                                    <p>Free Account Opening</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 align-items-center">
                                <div className='d-flex justify-content-center gap-1 m-auto'>
                                    <p>₹</p>
                                    <p style={{ fontSize: 80, marginTop: -40, color: "orange" }} className='position-relative fw-bold'>20</p>
                                    <p>Intraday and F&O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
