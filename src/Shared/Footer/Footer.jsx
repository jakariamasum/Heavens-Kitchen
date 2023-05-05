import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-500 text-white py-12 lg:px-32">
            <div className="flex flex-wrap justify-center lg:justify-between">
                <div className="mb-6 lg:mb-0">
                    <h3 className="text-lg font-bold mb-4 mr-2 lg:mr-0">Services</h3>
                    <Link to="#" className="block mb-2 text-sm hover:underline">Foods</Link>
                    <Link to="#" className="block mb-2 text-sm hover:underline">Delivery</Link>
                    <Link to="#" className="block text-sm hover:underline">Online <br className='md:hidden' /> Order</Link>
                </div>
                <div className="mb-6 lg:mb-0">
                    <h3 className="text-lg font-bold mb-4 mr-2 lg:mr-0">Heaven's Kitchen</h3>
                    <Link to="#" className="block mb-2 ml-6 text-sm hover:underline">About us</Link>
                    <Link to="#" className="block mb-2 ml-6 text-sm hover:underline">Contact</Link>
                    <Link to="#" className="block mb-2 ml-6 text-sm hover:underline">Foods</Link>
                    <Link to="#" className="block ml-6 text-sm hover:underline">Blog</Link>
                </div>
                <div className="mb-6 lg:mb-0">
                    <h3 className="text-lg font-bold mb-4">Legal</h3>
                    <Link to="#" className="block mb-2 text-sm hover:underline">Terms of use</Link>
                    <Link to="#" className="block mb-2 text-sm hover:underline">Privacy policy</Link>
                    <Link to="#" className="block text-sm hover:underline">Cookie policy</Link>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                    <form className="form-control">
                        <label className="sr-only">Enter your email address</label>
                        <div className="relative">
                            <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button type="submit" className="btn btn-primary bg-indigo-500 border-none absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Footer;