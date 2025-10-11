import React from 'react'

function Hero() {
    return (
        <>
            <div className="container pt-5">
                <div className="row text-center mt-5 pt-5">
                    <h4>Charges</h4>
                    <p className='fs-4 text-muted'>List of all charges and taxes</p>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-12 col-md-4 align-items-center text-center mt-5 pt-5">
                        <div className='d-flex justify-content-center gap-1 m-auto'>
                            <p style={{color:"orange", fontSize:50}}>₹</p>
                            <p style={{ fontSize: 150, marginTop: -50, color: "orange" }} className='position-relative fw-bold'>0</p>
                        </div>
                        <h4 className='text-muted'>Free equity delivery</h4>
                        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-12 col-md-4 align-items-center text-center mt-5 pt-5">
                        <div className='d-flex justify-content-center gap-1 m-auto'>
                            <p style={{color:"orange", fontSize:50}}>₹</p>
                            <p style={{ fontSize: 150, marginTop: -50, color: "orange" }} className='position-relative fw-bold'>20</p>
                        </div>
                        <h4 className='text-muted'>Intraday and F&O trades</h4>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-12 col-md-4 align-items-center text-center mt-5 pt-5">
                        <div className='d-flex justify-content-center gap-1 m-auto'>
                            <p style={{color:"orange", fontSize:50}}>₹</p>
                            <p style={{ fontSize: 150, marginTop: -50, color: "orange" }} className='position-relative fw-bold'>0</p>
                        </div>
                        <h5 className='text-muted'>Free direct MF</h5>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
