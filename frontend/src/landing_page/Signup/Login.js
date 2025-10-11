import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [userdata, setUserdata] = useState({
        email: "",
        password: ""
    });
    const [show, setShow] = useState(false)
    const [errmessage, setErrmessage] = useState("");

    function getdata(e) {
        let { name, value } = e.target;
        setUserdata((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    async function logindata(e) {
        e.preventDefault();
        try {
            let response = await fetch("http://localhost:8000/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...userdata
                }),
            });
            const data = await response.json();
            if(data.success){
                window.location.href = `http://localhost:3000?token=${data.token}`;
            }
            else{
                setShow(true);
                setErrmessage(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row mt-5 pt-5">
                    <div className="col-12 col-md-6 mt-5 m-auto signup p-3 p-md-0">
                        <div className="row">
                            <div className="col-12 col-md-6 px-4">
                                <section className='border-bottom p-2 d-flex gap-4 justify-content-center'>
                                    <Link to="/signup" className='btn btn-light'>Signup</Link>
                                    <Link to="/login" className='btn btn-primary'>Login</Link>
                                </section>
                                <form onSubmit={logindata} className='mt-4'>
                                    {show?<p className='text-danger text-center'>{errmessage}</p>:null}
                                    <label htmlFor="" className='form-label'>Email*</label>
                                    <input type="email" className='form-control mb-2' name='email' onChange={getdata} />
                                    <label htmlFor="" className='form-label'>Password*</label>
                                    <input type="text" className='form-control mb-2' name='password' onChange={getdata} />
                                    <button className='btn btn-primary mb-2 w-100' type='submit'>Login</button>
                                </form>
                            </div>
                            <div className="col-12 col-md-6 video-box" style={{borderRadius:12}}>
                                <video
                                    src="/media/login.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="signup-video"
                                ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
