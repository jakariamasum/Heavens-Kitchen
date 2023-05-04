import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefDetails = () => {
    const chefData = useLoaderData();
    const { name, picture, likes, recipesList, bio, recipes, experience } = chefData;
    const [isFavorite, setIsFavorite] = useState(false);
    const [disabledButton, setDisabledButton] = useState(null);


    const handleFavorite = (buttonId,name) => {
        // setIsFavorite(true);
        setDisabledButton(buttonId);
        toast.success(`${name} is now your favorite recipe!`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const id = useParams()
    console.log(recipesList[1])
    return (
        <div className='mt-4'>
            <div className="min-h-16 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ml-28">
                    <img src={picture} alt={name} className="max-w-sm rounded-lg shadow-2xl h-[300px]" />
                    <div className='w-[50%]'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{bio}</p>
                        <p className="text-indigo-500 mb-2">{likes} likes | {recipes} recipes | {experience} years of experience</p>
                    </div>
                </div>
            </div>
                <h1 className="text-center font-bold text-3xl text-indigo-500 mt-32">Popular recipe</h1>
            <div className='grid grid-cols-3 mx-32 gap-3 my-24'>
                <div className="card card-compact w-full bg-[#CECCD6] shadow-xl">
                    <figure><img src={recipesList[0].image} alt={recipesList[0].name} className=' h-[250px] p-3'/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-3xl text-indigo-500">{recipesList[0].name}</h2>
                        <p>
                            <p className='font-semibold text-2xl'>Ingredients:</p>
                            {recipesList[0].ingredients.map(item => <li className='ml-5'>{item}</li>)}
                        </p>
                        <p>
                            <p className='font-semibold text-2xl'>Cooking Method:</p>
                            {recipesList[0].method.map(item => <li className='ml-5'>{item}</li>)}
                            {/* <p>{recipesList[0].method}</p> */}
                        </p>
                        <div className="card-actions justify-end">
                            <button
                                className={`bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full}`}
                                disabled={disabledButton==='button1'}
                                onClick={() => handleFavorite('button1',recipesList[0].name)}
                            >
                                {/* {isFavorite ? 'Already Favourite' : 'Add to Favourite'} */}
                            Add to favourite
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-[#CECCD6] shadow-xl">
                    <figure><img src={recipesList[1].image} alt={recipesList[1].name} className=' h-[250px] p-3'/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-3xl text-indigo-500">{recipesList[1].name}</h2>
                        <p>
                            <p className='font-semibold text-2xl'>Ingredients:</p>
                            {recipesList[1].ingredients.map(item => <li className='ml-5'>{item}</li>)}
                        </p>
                        <p>
                            <p className='font-semibold text-2xl'>Cooking Method:</p>
                            {recipesList[1].method.map(item => <li className='ml-5'>{item}</li>)}
                            {/* <p>{recipesList[0].method}</p> */}
                        </p>
                        <div className="card-actions justify-end">
                            <button
                                className={`bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${isFavorite && 'bg-gray-400 cursor-default'
                                    }`}
                                disabled={disabledButton==='button2'}
                                onClick={() => handleFavorite('button2',recipesList[1].name)}
                            >
                                {isFavorite ? 'Already Favourite' : 'Add to Favourite'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-[#CECCD6] shadow-xl">
                    <figure><img src={recipesList[2].image} alt={recipesList[2].name}  className=' h-[250px] p-3'/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-3xl text-indigo-500">{recipesList[2].name}</h2>
                        <p>
                            <p className='font-semibold text-2xl'>Ingredients:</p>
                            {recipesList[2].ingredients.map(item => <li className='ml-5'>{item}</li>)}
                        </p>
                        <p>
                            <p className='font-semibold text-2xl'>Cooking Method:</p>
                            {recipesList[2].method.map(item => <li className='ml-5'>{item}</li>)}
                            {/* <p>{recipesList[0].method}</p> */}
                        </p>
                        <div className="card-actions justify-end">
                            <button
                                className={`bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${isFavorite && 'bg-gray-400 cursor-default'
                                    }`}
                                disabled={disabledButton==='button3'}
                                onClick={() => handleFavorite('button3',recipesList[2].name)}
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