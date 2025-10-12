import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL

function Signup() {
    let navigate = useNavigate()
    const [userdata, setUserdata] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [errormessage, setErrormessage] = useState({
        username: "Username Required",
        email: "Email Required",
        password: "Password required"
    })

    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState("");

    function getdata(e) {
        let { name, value } = e.target;
        setUserdata((pre) => {
            return {
                ...pre,
                [name]: value
            }
        });

        setErrormessage((pre) => {
            let message = "";
            if (value.trim() === "") {
                message = `${name} required`
            }
            else if (name === "email" && !(value.includes("@"))) {
                message = `Enter a valid email`
            }
            else if (name === "password" && value.length < 8) {
                message = `Password must be at least 8 characters long`
            }
            return {
                ...pre,
                [name]: message
            }
        })
    }

    async function Signupdata(e) {
        e.preventDefault();
        let error = Object.values(errormessage).find((x) => x !== "");
        if (error) {
            setShow(true);
        }
        else {
            try {
                let response = await fetch(`${API_URL}/signup`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...userdata
                    })
                });
                const data = await response.json();
                console.log(data.message)
                if (data.success) {
                    setSuccess(data.message);
                    setTimeout(() => {
                        navigate("/login")
                    }, 1000)
                }
                else {
                    setShow(true);
                    setErrormessage((pre) => {
                        return {
                            ...pre,
                            "email": data.message
                        }
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row mt-5 pt-5">
                    <div className="col-11 col-md-6 mt-5 m-auto signup">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <img src="/media/images/signup.jpeg" className='w-100 h-100' style={{borderRadius: 12 }} alt="" />
                            </div>
                            <div className="col-md-6 mt-3 mt-md-0">
                                <section className='border-bottom p-2 d-flex gap-4 justify-content-center'>
                                    <Link to="/signup" className='btn btn-primary'>Signup</Link>
                                    <Link to="/login" className='btn btn-light'>Login</Link>
                                </section>
                                <p className='text-success text-center'>{success}</p>
                                <form onSubmit={Signupdata} className='mt-4'>
                                    <label htmlFor="" className='form-label mb-2'>Username*</label>
                                    <input type="text" className='form-control mb-2' name='username' onChange={getdata} />
                                    {show ? <p className='text-danger'>{errormessage.username}</p> : null}
                                    <label htmlFor="" className='form-label'>Email*</label>
                                    <input type="email" className='form-control mb-2' name='email' onChange={getdata} />
                                    {show ? <p className='text-danger'>{errormessage.email}</p> : null}
                                    <label htmlFor="" className='form-label'>Password*</label>
                                    <input type="text" className='form-control mb-2' name='password' onChange={getdata} />
                                    {show ? <p className='text-danger'>{errormessage.password}</p> : null}
                                    <button className='btn btn-primary mb-2 w-100' type='submit'>Sign-up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
