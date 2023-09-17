import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Result } from 'postcss';
import Swal from 'sweetalert2';
import signupImg from '../../assets/others/authentication2.png'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const SignUp = () => {
    const { createUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const name = data.name;
            const email = data.email;
            const password = data.password;
            const userInfo = { name, email }
            const user = await createUser(email, password, name)
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            reset();
            Swal.fire({
                icon: 'success',
                title: 'WoW',
                text: 'Account Created Successfully '
            }).then(async (result) => {
                await logOut;
                navigate("/login")
            })

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <Helmet>
                <title>Fusion Fable Feast | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row  shadow-xl shadow-green-950 p-10 bg-img-css">
                    <div className=" sm:w-1/2 ">
                        <img className='relative z-10' src={signupImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-inner shadow-stone-500 bg-[#efeded]">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className='text-4xl font-bold text-indigo-500 underline text-center'>SignUp</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name",
                                    {
                                        required: true

                                    })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This feild is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email",
                                    {
                                        required: true
                                    })}
                                    placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This feild is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        pattern: /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/  //Minimum six characters,  one lowercase letter, one number 

                                    })}
                                    placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'pattern' && <p className='text-red-700'>Minimum six characters,  one lowercase letter, one number</p>}
                                {errors.password?.type === 'required' && <p className='text-red-700'>Password is rquired </p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                            <SocialLogin></SocialLogin>
                            <p className='text-center text-orange-600'>Already registered?  <Link to='/login' className='underline hover:text-indigo-800'>Go to logIn</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;