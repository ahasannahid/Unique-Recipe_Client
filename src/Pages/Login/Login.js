import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/download.png'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AUthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {

    useTitle('Login')

    const [error, setError] = useState(' ')
    const navigate = useNavigate();

    const { signIn, providerLogin } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleSignSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError(' ')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            }
            )
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSIgnIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }



    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-slate-400 shadow-2xl py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleSignSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='text-red-600'>{error}</div>
                    </form>

                    <Link className='text-center'>
                        <button onClick={handleGoogleSIgnIn} className="btn btn-info"><FaGoogle className='mr-2'></FaGoogle> Google SignIn</button>
                    </Link>

                    <p className='text-center'>New to Unique Recipe, Please <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;