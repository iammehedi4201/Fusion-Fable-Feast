import React, { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Login.css'
import loginImg from '../../assets/others/authentication2.png'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [disabled, setDisabled] = useState(true)
    const { logIn, user } = useContext(AuthContext)
    useEffect(() => {
        loadCaptchaEnginge(6, 'yellow', 'black', 'numbers');
    }, [])

    let from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            const user = await logIn(email, password);
            toast.success(`Login Succesfullty`)
            navigate(from, { replace: true });
        } catch (error) {
            console.log(error);
        }
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            toast.success('Captcha Matched')
            setDisabled(false)
        }
    }

    return (
        <div className=''>
            <Helmet>
                <title>Fusion Fable Feast | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row shadow-xl shadow-green-950 p-10 bg-img-css">
                    <div className=" sm:w-1/2 ">
                        <img className='relative z-10' src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-inner shadow-stone-500 bg-[#efeded]">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-4xl font-bold text-indigo-500 underline text-center'>LogIn</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label my-4 border-2 flex justify-center text-center">
                                    <LoadCanvasTemplateNoReload />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="type the Captcha that on the scren" className="input input-bordered" />
                                {/* <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2 ">Validate</button> */}
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <SocialLogin></SocialLogin>
                            <p className='text-center text-orange-600'>New here? <Link to='/signup' className='underline hover:text-indigo-800'>Create a New Account</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;