import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="container-fluid px-5 mt-5 pt-5 pb-3 bg-body-tertiary">
                <div className="row">
                    <div className="col-md-3">
                        <img src="/media/images/logo.svg" className='w-50 mb-2' alt="" />
                        <p className='mb-3'>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                        <div className='mb-2 border-bottom pb-1 d-flex gap-5 fw-bold'>
                           <Link><i class="fa-brands fa-facebook"></i></Link>
                           <Link><i class="fa-brands fa-linkedin"></i></Link>
                            <Link><i class="fa-brands fa-github"></i></Link>
                            <Link><i class="fa-brands fa-x-twitter"></i></Link>
                        </div>
                        <div className='mb-2 pb-1 d-flex gap-5 fw-bold'>
                           <Link><i class="fa-brands fa-youtube"></i></Link>
                           <Link><i class="fa-brands fa-whatsapp"></i></Link>
                            <Link><i class="fa-brands fa-telegram"></i></Link>
                        </div>
                    </div>
                    <div className='col-md-2 mt-2 mt-md-0'>
                        <h5 className=''>Account</h5>
                        <ul className='mt-3 list-unstyled'>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Open demat account</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Minor demat account</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>NRI demat account</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Commodity</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Dematerialisation</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Fund transfer</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>MTF</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Referral program</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-3 mt-2 mt-md-0'>
                        <h5 className=''>Support</h5>
                        <ul className='mt-3 list-unstyled'>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Contact us</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Support portal</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>How to file a complaint?</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Status of your complaints</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Bulletin</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Circular</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Z-Connect blog</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Downloads</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-2 mt-2 mt-md-0'>
                        <h5 className=''>Company</h5>
                        <ul className='mt-3 list-unstyled'>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>About</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Philosophy</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Press & media</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Carrers</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Zerodha Cares (CSR)</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Zerodha.tech</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Open source</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-2 mt-2 mt-ms-0'>
                        <h5 className=''>Quick Links</h5>
                        <ul className='mt-3 list-unstyled'>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Upcoming IPOs</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Brokerage charge</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Market holidays</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Economic calendar</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Calculators</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Markets</Link></li>
                            <li className='mt-2'><Link className='text-decoration-none text-black hover-me'>Sectors</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <p style={{fontSize:10, textAlign:"justify"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p style={{fontSize:10, textAlign:"justify"}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p style={{fontSize:10, textAlign:"justify"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p style={{fontSize:10, textAlign:"justify"}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p style={{fontSize:10, textAlign:"justify"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
