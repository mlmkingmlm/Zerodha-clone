import React from 'react'

function Hero() {
    return (
        <>
        <div className="container-fluid pt-5 bg-secondary-subtle pb-5">
         <div className="row pt-5 mt-5 px-3">
            <div className="col-6 m-auto">
                <h2>Support Portal</h2>
            </div>
            <div className="col-6 text-end">
                <button className='btn btn-primary fw-bold'>My Tickets</button>
            </div>
         </div>
         <div className="row px-3">
            <div className="col-12 d-flex border search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input className='w-100' type="text" placeholder='Eg. How do i open my account, How do i activate F&O...' />
            </div>
         </div>
        </div>
        </>
    )
}

export default Hero
