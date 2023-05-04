import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=1060&t=st=1683133953~exp=1683134553~hmac=f6d0415b5c1d30709c2646f0aff9ee52561c1aec5cf5aac235259d1a56fe4dc6")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mx-auto">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;