import React from 'react'

function AccountCharge() {
    return (
        <>
            <div className="container mt-5 pt-5">
                <h4 className='text-muted'>Charges for account opening</h4>
                <div className="row">
                    <div className="col-12">
                        <table className=' mt-2 w-100'>
                            <thead className='border-1'>
                                <tr>
                                    <th className='p-3'>Type of account</th>
                                    <th className='p-3'>Charges</th>
                                </tr>
                            </thead>
                            <tbody className='border-1'>
                                <tr>
                                    <td className="p-3">Online account</td>
                                    <td className="p-3"><p className='bg-success text-light text-center fw-semibold' style={{ width: 70, height: 30, borderRadius: 5 }}>FREE</p></td>
                                </tr>
                                <tr className='bg-secondary-subtle'>
                                    <td className="p-3">Offline account</td>
                                    <td className="p-3"><p className='bg-success text-light text-center fw-semibold' style={{ width: 70, height: 30, borderRadius: 5 }}>FREE</p></td>
                                </tr>
                                <tr>
                                    <td className="p-3">NRI account (offline only)</td>
                                    <td className="p-3">₹ 500</td>
                                </tr>
                                <tr className='bg-secondary-subtle'>
                                    <td className="p-3">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                    <td className="p-3">₹ 500</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <h4 className='text-muted mt-5 pt-5'>Demat AMC (Annual Maintenance Charge)</h4>
                <div className="row">
                    <div className="col-12">
                        <table className=' mt-2 w-100'>
                            <thead className='border-1'>
                                <tr>
                                    <th className='p-3'>Value of holdings</th>
                                    <th className='p-3'>AMC</th>
                                </tr>
                            </thead>
                            <tbody className='border-1'>
                                <tr>
                                    <td className="p-3">Up to ₹4 lakh</td>
                                    <td className="p-3"><p className='bg-success text-light text-center fw-semibold' style={{ width: 70, height: 30, borderRadius: 5 }}>FREE</p></td>
                                </tr>
                                <tr className='bg-secondary-subtle'>
                                    <td className="p-3">₹4 lakh - ₹10 lakh</td>
                                    <td className="p-3">₹ 100 per year, charged quarterly*</td>
                                </tr>
                                <tr >
                                    <td className="p-3">Above ₹10 lakh</td>
                                    <td className="p-3">₹ 300 per year, charged quarterly</td>
                                </tr>

                            </tbody>
                        </table>
                        <p className='mt-2' style={{ fontSize: 13, textAlign: 'justify' }}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,</p>
                    </div>
                </div>
                <h4 className='text-muted mt-5 pt-5'>Charges for optional value added services</h4>
                <div className="row">
                    <div className="col-12">
                        <table className=' mt-2 w-100'>
                            <thead className='border-1'>
                                <tr>
                                    <th className='p-3'>Services</th>
                                    <th className='p-3'>Billing Frquency</th>
                                    <th className='p-3'>Charges</th>
                                </tr>
                            </thead>
                            <tbody className='border-1'>
                                <tr>
                                    <td className="p-3">Tickertape</td>
                                    <td className='p-3'>Monthly / Annual</td>
                                    <td className='p-3'>Free: 0 | Pro: 249/2399</td>
                                </tr>
                                <tr className='bg-secondary-subtle'>
                                    <td className="p-3">Smallcase</td>
                                    <td className="p-3">Per transaction</td>
                                    <td className='p-3'>Buy & Invest More: 100 | SIP: 10</td>
                                </tr>
                                <tr >
                                    <td className="p-3">Kite Connect</td>
                                    <td className="p-3">Monthly</td>
                                    <td className='p-3'>Connect: 500 | Personal: Free</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <h4 className='text-muted mt-5 pt-5'>Charges Explained</h4>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <p className='fw-semibold'>Securities/Commodities transaction tax</p>
                        <p className='charges-p'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O. </p>
                        <p className='charges-p'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                        <p className='fw-semibold'>Transaction/Turnover Charges</p>
                        <p className='charges-p'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                        <p className='charges-p'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                        <p className='charges-p'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                        <p className='charges-p'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                        <p className='charges-p'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                        <p className='charges-p'></p>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                        <p className='fw-semibold'>GST</p>
                        <p className='charges-p'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                        <p className='fw-semibold'>SEBI Charges</p>
                        <p className='charges-p'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                        <p className='fw-semibold'>DP (Depository participant) charges</p>
                        <p className='charges-p'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p className='charges-p'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                        <p className='charges-p'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountCharge
