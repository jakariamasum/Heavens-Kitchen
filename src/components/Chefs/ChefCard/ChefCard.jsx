import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {id,name,experience,picture,recipies,likes}=chef;
    // const id=useParams(); 
    console.log(id)
    return (
        <div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 object-cover" src={picture} alt={name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {experience} years of experience | {recipies} recipes | {likes} likes
                    </p>
                </div>
                <div className="px-6 py-4">
                    <Link to={`/chefs/${id}`}><button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        View Recipes
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;