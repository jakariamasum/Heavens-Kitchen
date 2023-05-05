import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard/ChefCard';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        //fetch the server data
        fetch('https://heaven-s-kitchen-server-jakariamasum.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div className='lg:ml-28'>
            <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-bold  text-center my-16 text-indigo-500">Featured Chefs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {chefs.map((chef) => (
                        <ChefCard key={chef.id} chef={chef}></ChefCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chefs;