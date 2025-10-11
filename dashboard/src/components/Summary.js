import React from 'react'

function Summary({user}) {
    return (
        <>
            <div className='mx-3 text-muted pb-5'>
                <h3 className='border-bottom  pb-3'>Hi, {user.username}</h3>
                <p className='mt-5 fs-5'>Equity</p>
                <section className='d-flex justify-content-between pb-5 border-bottom'>
                    <div className='mt-5 d-flex flex-column w-25 gap-3 border-end'>
                        <h2>5.45k</h2>
                        <p>Margin Available</p>
                    </div>
                    <div className='mt-5 d-flex flex-column w-50 text-start'>
                        <p>Margins 0</p>
                        <p>Opening Balance : 5.45K</p>
                    </div>
                </section>
                <section className='d-flex justify-content-between border-bottom pb-5'>
                    <div className='mt-5 d-flex flex-column w-25 gap-3 border-end'>
                        <h2 className='mt-2 text-success'>22.34k <sub>+5.30%</sub></h2>
                        <p>P&L</p>
                    </div>
                    <div className='mt-5 d-flex flex-column w-50 text-start'>
                        <p>Current Value: 25.3k</p>
                        <p>Investment : 20.2K</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Summary
