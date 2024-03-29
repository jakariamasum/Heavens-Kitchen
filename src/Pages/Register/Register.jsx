import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const auth = getAuth();
const Register = () => {
    const navigate = useNavigate();
    const { createUser,logOut } = useContext(AuthContext);
    const [err, setErr] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setErr('Password must at least 6 character')
            return;
        }

        console.log(name, photo, email, password)

        //create user by using email and password
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => { 
                    logOut();
                    navigate('/login')
                })
                .catch((error) => { });
                form.name.value = "";
                form.photoUrl.value = "";
                form.email.value = "";
                form.password.value = "";
            })
            .catch(error => {
                console.log(error);
            })
            toast.success("Registration succesful. Please login", {
                position: toast.POSITION.TOP_RIGHT,
            });
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Registration</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <form onSubmit={handleRegister}>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
                            <input type="text" name="name" id="name" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Email</label>
                            <input type="email" name="email" id="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" required />

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input type="password" name="password" id="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" required />

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Photo URL</label>
                            <input type="text" name="photoUrl" id="photoUrl" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                            <p className='text-red-400 mb-3'>{err}</p>
                            <button type="submit" className="transition duration-500 ease-in-out bg-indigo-500 hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg w-full">
                                Register
                            </button>
                            <div className='mt-3'>
                                <p>Already have an account? <span><Link to='/login' className='link text-indigo-500'>Login here</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Register;
