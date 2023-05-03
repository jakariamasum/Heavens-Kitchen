import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefDetails = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        setIsFavorite(true);
        toast.success(`${name} is now your favorite recipe!`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const chefData = useLoaderData();
    const { name, picture, likes, recipesList, bio, recipes, experience } = chefData;
    const id = useParams()
    console.log(recipesList[1])
    return (
        <div>
            <div className="min-h-16 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} alt={name} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-[50%]'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{bio}</p>
                        <p className="text-gray-700 mb-2">{likes} likes | {recipes} recipes | {experience} years of experience</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 mx-32 gap-3'>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">{recipesList[0].name}</h2>
                        <p>
                            <p>Ingredients:</p>
                            {recipesList[0].ingredients.map(item => <li>{item}</li>)}
                        </p>
                        <p>
                            <p>Cooking Method:</p>
                            {recipesList[0].method.map(item => <li>{item}</li>)}
                            {/* <p>{recipesList[0].method}</p> */}
                        </p>
                        <div className="card-actions justify-end">
                            <button
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${isFavorite && 'bg-gray-400 cursor-default'
                                    }`}
                                disabled={isFavorite}
                                onClick={handleFavorite}
                            >
                                {isFavorite ? 'Already Favourite' : 'Add to Favourite'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">{recipesList[1].name}</h2>
                        <p>
                            <p>Ingredients:</p>
                            {recipesList[1].ingredients.map(item => <li>{item}</li>)}
                        </p>
                        <p>
                            <p>Cooking Method:</p>
                            {recipesList[1].method.map(item => <li>{item}</li>)}
                            {/* <p>{recipesList[0].method}</p> */}
                        </p>
                        <div className="card-actions justify-end">
                            <button
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${isFavorite && 'bg-gray-400 cursor-default'
                                    }`}
                                disabled={isFavorite}
                                onClick={handleFavorite}
                            >
                                {isFavorite ? 'Already Favourite' : 'Add to Favourite'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">{recipesList[2].name}</h2>
                        <p>
                            <p>Ingredients:</p>
                            {recipesList[2].ingredients.map(item => <li>{item}</li>)}
                        </p>
                        <p>
                            <p>Cooking Method:</p>
                            {recipesList[2].method.map(item => <li>{item}</li>)}
                            {/* <p>{recipesList[0].method}</p> */}
                        </p>
                        <div className="card-actions justify-end">
                            <button
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${isFavorite && 'bg-gray-400 cursor-default'
                                    }`}
                                disabled={isFavorite}
                                onClick={handleFavorite}
                            >
                                {isFavorite ? 'Already Favourite' : 'Add to Favourite'}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefDetails;