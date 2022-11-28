import React, { createContext, useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser, googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const [checkvalue, setCheckvalue] = useState(false)
    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const isSeller = checkvalue

        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(res => {
                        const user = {
                            name:name,
                            email:email,
                            isSeller: isSeller
                        }
                        fetch('http://localhost:5000/users',{
                            method:'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            navigate('/')
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(res => console.log(res.user))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-3xl mt-5 font-bold'>Sign Up Now!</h1>
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text text-xl font-semibold">Seller?</span>
                                        <input onChange={(e) => setCheckvalue(e.target.checked)} type="checkbox" className="checkbox checkbox-info" />
                                    </label>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div>
                                Already have an account? <Link to='/login' className='text-blue-500'>Log In</Link>
                            </div>
                        </form>
                        <div className="form-control my-4 mx-8">
                            <button onClick={handleGoogleLogIn} className="btn btn-success ">Google Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;