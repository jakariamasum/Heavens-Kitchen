import React from 'react';

const Service = () => {
    return (
        <div className='mx-4 my-16 lg:mx-32'>
            <h1 className="text-center my-8 font-bold text-3xl text-indigo-500">Our Services</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                <section>
                    <div className="card bg-base-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Foods" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Good Food</h2>
                            <p>There are 200+ food available</p>
                            <div className="card-actions">
                                <button className="btn btn-outline btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card bg-base-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://img.freepik.com/free-vector/chef-character-design_1322-128.jpg?w=740&t=st=1683207520~exp=1683208120~hmac=947ba1a66226c5d085cb6c4b875d2adaa0f7a266755b4f2e8608736c2d1aa414" alt="Foods" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Experienced Chefs</h2>
                            <p>We have 15+ most experienced chefs</p>
                            <div className="card-actions">
                                <button className="btn btn-outline btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card bg-base-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://img.freepik.com/free-vector/everyday-service-concept_1017-30337.jpg?w=740&t=st=1683207567~exp=1683208167~hmac=376d1298d1c68a0f253f1823564dc0e393403bb52fb8eb4c1b63719a3b692570" alt="Foods" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Best Service</h2>
                            <p>We are available anytime</p>
                            <div className="card-actions">
                                <button className="btn btn-outline btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Service;