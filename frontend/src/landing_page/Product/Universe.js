import React from 'react'

function Universe() {
    return (
        <>
            <div className="container mt-5 text-center pt-5">
                <h3>The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="row mt-5">
                    <div className="col-md-4 pt-5">
                        <img src="/media/images/zerodhafundhouse.png" alt="" className='w-50' style={{ width: 200, height: 50 }} />
                        <p className='mt-2'>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <img src="/media/images/sensibull-logo.svg" alt="" className='w-50' style={{ width: 200, height: 50 }} />
                        <p className='mt-2'>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <img src="/media/images/tijori.svg" alt="" className='w-50' style={{ width: 200, height: 50 }} />
                        <p className='mt-2'>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <img src="/media/images/streak-logo.png" alt="" className='w-50' style={{ width: 200, height: 50 }} />
                        <p className='mt-2'>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <img src="/media/images/smallcase-logo.png" alt="" className='w-50' style={{ width: 200, height: 50 }} />
                        <p className='mt-2'>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <img src="/media/images/ditto-logo.png" alt="" className='w-50' style={{ width: 200, height: 50 }} />
                        <p className='mt-2'>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                            Sign up for free
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Universe
