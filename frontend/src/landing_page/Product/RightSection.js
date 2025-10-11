import React from 'react'
import { Link } from "react-router-dom"

function RightSection({ imageurl, productheading, productdescription, firstlinkname, firstlinkurl, secondlinkname, secondlinkurl }) {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-5 mt-md-5 ms-auto">
                        <h3 className='mt-5'>{productheading}</h3>
                        <p>{productdescription}</p>
                        <Link to={firstlinkurl} className='text-decoration-none'>{firstlinkname}</Link></div>
                    <div className="col-md-5 ms-auto">
                        <img src={imageurl} alt="" className='w-100' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default RightSection
