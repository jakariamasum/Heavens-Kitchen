import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link, useParams } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, name, experience, picture, recipies, likes } = chef;
    console.log(id);
    return (
        <div className="mx-auto text-center sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <LazyLoad height={200} offset={100}>
                <img className="w-full h-48 object-cover" src={picture} alt={name} />
            </LazyLoad>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {experience} years of experience | {recipies} recipes | {likes} likes
                </p>
            </div>
            <div className="px-6 py-4">
                <Link to={`/chefs/${id}`}>
                    <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        View Recipes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ChefCard;
