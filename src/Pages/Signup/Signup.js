import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/signup.png';
import { AuthContext } from '../../Context/AuthProvider/AUthProvider';
import useTitle from '../../Hooks/useTitle';


const SignUp = () => {
    useTitle('Sign Up')
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            navigate('/');
            console.log(user);
        })
        .catch(err => console.error(err));
    
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="bg-slate-400 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>

                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already Have An Account <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;