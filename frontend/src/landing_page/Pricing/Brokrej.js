import React, { useState } from 'react'

function Brokrej() {
    const [option, setOption] = useState("equity");

    function getdata(data) {
        setOption(data);
    }
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className='d-flex gap-3 gap-md-5 tabbtns border-bottom w-100 overflow-x-auto overflow-y-hidden'>
                        <button onClick={() => getdata("equity")} className={`${option === "equity"?"border-bottom border-primary border-3 text-muted":"border-0"}`}>Equity</button>
                        <button onClick={() => getdata("currency")} className={`${option === "currency"?"border-bottom border-primary border-3 text-muted":"border-0"}`}>Currency</button>
                        <button onClick={() => getdata("commodity")} className={`${option === "commodity"?"border-bottom border-primary border-3 text-muted":"border-0"}`}>Commodity</button>
                    </div>
                </div>
                {
                    option === "equity" ? <div className="row">
                        <div className="col-12 overflow-auto">
                            <table className='mt-5'>
                                <thead className='border-1'>
                                    <tr>
                                        <th></th>
                                        <th className='p-3'>Equity delivery</th>
                                        <th className='p-3'>Equity intraday</th>
                                        <th className='p-3'>F&amp;O - Futures</th>
                                        <th className='p-3'>F&amp;O - Options</th>
                                    </tr>
                                </thead>
                                <tbody className='border-1'>
                                    <tr>
                                        <td className="p-3">Brokerage</td>
                                        <td className="p-3">Zero Brokerage</td>
                                        <td className="p-3">0.03% or Rs. 20/executed order whichever is lower</td>
                                        <td className="p-3">0.03% or Rs. 20/executed order whichever is lower</td>
                                        <td className="p-3">Flat Rs. 20 per executed order</td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">STT/CTT</td>
                                        <td className="p-3">0.1% on buy &amp; sell</td>
                                        <td className="p-3">0.025% on the sell side</td>
                                        <td className="p-3">0.02% on the sell side</td>
                                        <td className="p-3">
                                            <ul>
                                                <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                                <li>0.1% on sell side (on premium)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Transaction charges</td>
                                        <td className="p-3">
                                            NSE: 0.00297% <br /> BSE: 0.00375%
                                        </td>
                                        <td className="p-3">
                                            NSE: 0.00297% <br /> BSE: 0.00375%
                                        </td>
                                        <td className="p-3">
                                            NSE: 0.00173% <br /> BSE: 0
                                        </td>
                                        <td className="p-3">
                                            NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)
                                        </td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">GST</td>
                                        <td className="p-3">
                                            18% on (brokerage + SEBI charges + transaction charges)
                                        </td>
                                        <td className="p-3">
                                            18% on (brokerage + SEBI charges + transaction charges)
                                        </td>
                                        <td className="p-3">
                                            18% on (brokerage + SEBI charges + transaction charges)
                                        </td>
                                        <td className="p-3">
                                            18% on (brokerage + SEBI charges + transaction charges)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">SEBI charges</td>
                                        <td className="p-3">₹10 / crore</td>
                                        <td className="p-3">₹10 / crore</td>
                                        <td className="p-3">₹10 / crore</td>
                                        <td className="p-3">₹10 / crore</td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">Stamp charges</td>
                                        <td className="p-3">0.015% or ₹1500 / crore on buy side</td>
                                        <td className="p-3">0.003% or ₹300 / crore on buy side</td>
                                        <td className="p-3">0.002% or ₹200 / crore on buy side</td>
                                        <td className="p-3">0.002% or ₹200 / crore on buy side</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> : option === "currency" ? <div className="row">
                        <div className="col-12 overflow-auto">
                            <table className='mt-5 w-100'>
                                <thead className='border-1'>
                                    <tr>
                                        <th></th>
                                        <th className='p-3'>Currency futures</th>
                                        <th className='p-3'>Currency Options</th>
                                    </tr>
                                </thead>
                                <tbody className='border-1'>
                                    <tr>
                                        <td className="p-3">Brokerage</td>
                                        <td className="p-3">0.03% or ₹ 20/executed order whichever is lower</td>
                                        <td className="p-3">₹ 20/executed order</td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">STT/CTT</td>
                                        <td className="p-3">No STT</td>
                                        <td className="p-3">No STT</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Transaction charges</td>
                                        <td className="p-3">
                                            NSE: 0.00035% <br /> BSE: 0.00045%
                                        </td>
                                        <td className="p-3">
                                            NSE: 0.0311% <br /> BSE: 0.001%
                                        </td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">GST</td>
                                        <td className="p-3">
                                            18% on (brokerage + SEBI charges + transaction charges)
                                        </td>
                                        <td className="p-3">
                                            18% on (brokerage + SEBI charges + transaction charges)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">SEBI charges</td>
                                        <td className="p-3">₹10 / crore</td>
                                        <td className="p-3">₹10 / crore</td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">Stamp charges</td>
                                        <td className="p-3">0.0001% or ₹10 / crore on buy side</td>
                                        <td className="p-3">0.0001% or ₹10 / crore on buy side</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> : <div className="row">
                        <div className="col-12 overflow-auto">
                            <table className='mt-5 w-100'>
                                <thead className='border-1'>
                                    <tr>
                                        <th></th>
                                        <th className='p-3'>Commodity futures</th>
                                        <th className='p-3'>Commodity Options</th>
                                    </tr>
                                </thead>
                                <tbody className='border-1'>
                                    <tr>
                                        <td className="p-3">Brokerage</td>
                                        <td className="p-3">0.03% or ₹ 20/executed order whichever is lower</td>
                                        <td className="p-3">₹ 20/executed order</td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">STT/CTT</td>
                                        <td className="p-3">0.01% on sell side (Non-Agri)</td>
                                        <td className="p-3">0.05% on sell side</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Transaction charges</td>
                                        <td className="p-3">
                                            MCX: 0.0021%
                                            <br />
                                            NSE: 0.0001%
                                        </td>
                                        <td className="p-3">
                                            MCX: 0.0418%
                                            <br />
                                            NSE: 0.001%
                                        </td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">GST</td>
                                        <td className="p-3">
                                            18% on (brokerage + SEBI charges + transaction charges)
                                        </td>
                                        <td className="p-3">
                                            18% on (brokerage + SEBI charges + transaction charges)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">SEBI charges</td>
                                        <td className="p-3">Agri: <br />
                                            ₹1 / crore <br />
                                            Non-agri: <br />
                                            ₹10 / crore</td>
                                        <td className="p-3">₹10 / crore</td>
                                    </tr>
                                    <tr className=' bg-secondary-subtle'>
                                        <td className="p-3">Stamp charges</td>
                                        <td className="p-3">0.002% or ₹200 / crore on buy side</td>
                                        <td className="p-3">0.003% or ₹300 / crore on buy side</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Brokrej
