import React from 'react'
import { Link } from 'react-router-dom'

function Funds() {
    return (
        <>
            <div className="funds d-flex flex-column flex-md-row justify-content-end text-center gap-2 mx-3">
                <p className='text-secondary fs-6'>Instant, zero-cost fund transfers with UPI </p>
                <div className='d-flex gap-2 justify-content-center'>
                    <Link className="btn btn-success">Add funds</Link>
                <Link className="btn btn-primary">Withdraw</Link>
                </div>
            </div>
            <div className="row mt-5 pt-5 text-secondary">
                <div className="col-md-5">
                    <span>
                        <p>Equity</p>
                    </span>
                    <div className="table border p-4">
                        <div className="data d-flex gap-2">
                            <p>Available margin</p>
                            <p className="imp colored">4,043.10</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Used margin</p>
                            <p className="imp">3,757.30</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Available cash</p>
                            <p className="imp">4,043.10</p>
                        </div>
                        <hr />
                        <div className="data d-flex gap-2">
                            <p>Opening Balance</p>
                            <p>4,043.10</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Opening Balance</p>
                            <p>3736.40</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Payin</p>
                            <p>4064.00</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>SPAN</p>
                            <p>0.00</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Delivery margin</p>
                            <p>0.00</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Exposure</p>
                            <p>0.00</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Options premium</p>
                            <p>0.00</p>
                        </div>
                        <hr />
                        <div className="data d-flex gap-2">
                            <p>Collateral (Liquid funds)</p>
                            <p>0.00</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Collateral (Equity)</p>
                            <p>0.00</p>
                        </div>
                        <div className="data d-flex gap-2">
                            <p>Total Collateral</p>
                            <p>0.00</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-md-5 pt-md-5">
                    <div className="commodity text-center mt-md-5 pt-md-5">
                        <p>You don't have a commodity account</p>
                        <Link className="btn btn-primary">Open Account</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Funds
