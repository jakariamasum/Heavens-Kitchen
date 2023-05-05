import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [err,setErr]=useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //login with email and password
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                setErr('')
                form.name.value = "";
                form.email.value = "";
            })
            
            .catch(error => {
                console.log(error);
                setErr("Invalid password or email")
            })

    }

        //login with google
    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

        //login with github
    const handleGithubLogIn = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Login</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <form onSubmit={handleLogin}>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Email</label>
                            <input type="email" name="email" id="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input type="password" name="password" id="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                            <p className='ml-5 text-red-500 mb-2'>{err}</p>

                            <button type="submit" className="transition duration-500 ease-in-out bg-indigo-500 hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg w-full">
                                Login
                            </button>
                        </form>
                    </div>
                    <div className="my-3">
                        <div className='text-center '>
                            <p className='mb-3 text-gray-600 font-semibold'>Or <br /></p>
                            <button onClick={handleGoogleLogIn} className="btn btn-outline mb-2 text-indigo-500"><FaGoogle className='mr-3' />Continue with Google</button>
                            <button onClick={handleGithubLogIn} className="btn btn-outline text-indigo-500"><FaGithub className='mr-3' />Continue with Github</button>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap ml-3">
                                <Link className="text-blue-500 font-semibold hover:text-blue-600 text-sm">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="text-center sm:text-right whitespace-nowrap mr-3">
                                <Link to='/register' className="text-blue-500 font-semibold hover:text-blue-600 text-sm">
                                    Create an Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
