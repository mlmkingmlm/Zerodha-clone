import React from 'react'
import {Link} from "react-router-dom"

function LeftSection({imageurl, productheading, productdescription, firstlinkname, firstlinkurl, secondlinkname, secondlinkurl}) {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-5 ms-auto">
                    <img src={imageurl} alt="" className='w-100' />
                </div>
                <div className="col-md-5 mt-4 mt-md-5 ms-auto">
                    <h3>{productheading}</h3>
                    <p>{productdescription}</p>
                    <div className='d-flex gap-5 mb-3'>
                        <Link to={firstlinkurl} className='text-decoration-none'>{firstlinkname}</Link>
                    <Link to={secondlinkurl} className='text-decoration-none'>{secondlinkname}</Link>
                    </div>
                    <Link><img src="/media/images/google-play-badge.svg" alt="" /></Link>
                    <Link className='ms-5'><img src="/media/images/appstore-badge.svg" alt="" /></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default LeftSection
