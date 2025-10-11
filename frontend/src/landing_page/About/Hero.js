import React from 'react'

function Hero() {
    return (
        <>
            <div className="container pt-5">
                <div className="row mt-5 pt-5 text-center mb-5">
                    <div className='col-md-7 m-auto border-bottom pb-5 mb-5'>
                        <h4 className='w-100 text-muted'>We pioneered the discount broking model in India.
                            Now, we are breaking ground with our technology.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 m-auto">
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div className="col-md-5 mt-2 mt-md-0 m-auto">
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <h5 className='text-center fw-bold mb-5'>People</h5>
                    <div className="col-md-6 text-center">
                        <img src="/media/images/nithin-kamath.jpg" alt="" className='w-50' style={{ borderRadius: "50%" }} />
                        <p className='fw-bold mt-2'>Nithin Kamath</p>
                        <p>Founder, CEO</p>
                    </div>
                    <div className="col-md-6">
                        <p className='mt-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p mt-3>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 mt-5 pt-5 text-center">
                        <img src="/media/images/nikhil.jpg" alt="" className='w-50' style={{ borderRadius: "50%" }} />
                        <p className='mt-3 fw-semibold'>Nikhil Kamath</p>
                        <p>Co-founder & CFO</p>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header">
                                    <button class="accordion-button w-25 m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Bio
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 pt-5 text-center">
                        <img src="/media/images/kailash.jpg" alt="" className='w-50' style={{ borderRadius: "50%" }} />
                        <p className='mt-3 fw-semibold'>Dr. Kailash Nadh</p>
                        <p>CTO</p>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header">
                                    <button class="accordion-button w-25 m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        Bio
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 pt-5 text-center">
                        <img src="/media/images/venu.jpg" alt="" className='w-50' style={{ borderRadius: "50%" }} />
                        <p className='mt-3 fw-semibold'>Venu Madhav</p>
                        <p>COO</p>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header">
                                    <button class="accordion-button w-25 m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        Bio
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 pt-5 text-center">
                        <img src="/media/images/hanan.jpg" alt="" className='w-50' style={{ borderRadius: "50%" }} />
                        <p className='mt-3 fw-semibold'>Hanan Delvi</p>
                        <p>CCO</p>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header">
                                    <button class="accordion-button w-25 m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        Bio
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 pt-5 text-center">
                        <img src="/media/images/Seema.jpg" alt="" className='w-50' style={{ borderRadius: "50%" }} />
                        <p className='mt-3 fw-semibold'>Seema Patil</p>
                        <p>Director</p>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header">
                                    <button class="accordion-button w-25 m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                        Bio
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 pt-5 text-center">
                        <img src="/media/images/karthik.jpg" alt="" className='w-50' style={{ borderRadius: "50%" }} />
                        <p className='mt-3 fw-semibold'>Karthik Rangappa</p>
                        <p>Chief of Eduction</p>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header">
                                    <button class="accordion-button w-25 m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                        Bio
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
