import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefDetails = () => {
    const chefData = useLoaderData();
    const { name, picture, likes, recipesList, bio, recipes, experience } = chefData;
    const [disabledButton1, setDisabledButton1] = useState(null);
    const [disabledButton2, setDisabledButton2] = useState(null);
    const [disabledButton3, setDisabledButton3] = useState(null);

    // funtion for add to favourite and disable button
    const handleFavorite = (buttonId, name) => {
        if (buttonId === 'button1')
            setDisabledButton1(buttonId);
        if (buttonId === 'button2')
            setDisabledButton2(buttonId);
        if (buttonId === 'button3')
            setDisabledButton3(buttonId);
        toast.success(`${name} is now your favorite recipe!`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const id = useParams()
    console.log(recipesList[1])
    return (
        <div className='mt-4'>
            <div class="min-h-screen bg-base-200 flex justify-center items-center">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row sm:items-center">
                    <div class="w-full sm:w-1/2 mb-8 sm:mb-0 sm:mr-16 flex justify-center">
                        <img src={picture} alt={name} class="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl rounded-lg shadow-2xl" />
                    </div>
                    <div class="w-full sm:w-1/2 text-center sm:text-left">
                        <h1 class="text-5xl font-bold mb-4">{name}</h1>
                        <p class="mb-6">{bio}</p>
                        <p class="text-indigo-500 mb-2">{likes} likes | {recipes} recipes | {experience} years of experience</p>
                    </div>
                </div>
            </div>

            <h1 className="text-center font-bold text-3xl text-indigo-500 mt-32">Popular recipe</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4 sm:mx-8 md:mx-32 gap-3 my-8 sm:my-16'>
                <div className="card card-compact w-full bg-[#CECCD6] shadow-xl">
                    <figure><img src={recipesList[0].image} alt={recipesList[0].name} className=' h-[250px] p-3' /></figure>
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
                                className={`bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${disabledButton1 && 'bg-gray-400 cursor-default'
                                    }`} disabled={disabledButton1 === 'button1'}
                                onClick={() => handleFavorite('button1', recipesList[0].name)}
                            >
                                 {disabledButton1 ? 'Already Favourite' : 'Add to Favourite'} 
                            </button>
                        </div>
                    </div>
                </div>


                <div className="card card-compact w-full bg-[#CECCD6] shadow-xl">
                    <figure><img src={recipesList[1].image} alt={recipesList[1].name} className=' h-[250px] p-3' /></figure>
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
                                className={`bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${disabledButton2 && 'bg-gray-400 cursor-default'
                                    }`}
                                disabled={disabledButton2 === 'button2'}
                                onClick={() => handleFavorite('button2', recipesList[1].name)}
                            >
                                {disabledButton2 ? 'Already Favourite' : 'Add to Favourite'}
                            </button>
                        </div>
                    </div>
                </div>


                <div className="card card-compact w-full bg-[#CECCD6] shadow-xl">
                    <figure><img src={recipesList[2].image} alt={recipesList[2].name} className=' h-[250px] p-3' /></figure>
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
                                className={`bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${disabledButton3 && 'bg-gray-400 cursor-default'
                                    }`}
                                disabled={disabledButton3 === 'button3'}
                                onClick={() => handleFavorite('button3', recipesList[2].name)}
                            >
                                {disabledButton3 ? 'Already Favourite' : 'Add to Favourite'}
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