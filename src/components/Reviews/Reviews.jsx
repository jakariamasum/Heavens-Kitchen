import React from 'react';

const Reviews = () => {
    return (
        <div className='mx-4 my-8 md:mx-32 md:my-28'>
            <section className="px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h3 className="mb-6 text-4xl text-indigo-500 font-bold">Reviews</h3>
                    <p className="mb-6 pb-2 text-black md:mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                </div>

                <div className="grid gap-4 md:gap-12 text-center md:grid-cols-2">
                    <div className="mb-8 p-3 bg-white rounded-lg md:mb-0">
                        <div className="mb-6 flex justify-center">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg" className="w-20 md:w-24 rounded-full shadow-lg" />
                        </div>
                        <p className="my-4 text-lg md:text-xl text-black ">
                            "The restaurant had a great atmosphere and the service was excellent. However, the food was just average. It wasn't bad, but it wasn't anything special either."
                        </p>
                        <p className="text-sm md:text-base italic">- Taskin Ahmed</p>
                    </div>

                    <div className='p-3 bg-white rounded-lg'>
                        <div className="mb-6 flex justify-center ">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg" className="w-20 md:w-24 rounded-full shadow-lg" />
                        </div>
                        <p className="my-4 text-lg md:text-xl text-black">
                            "The food was delicious and well-prepared. The flavors were rich and savory, and the portions were generous. I highly recommend the grilled chicken!"
                        </p>
                        <p className="text-sm md:text-base italic">- Farzana Haque</p>
                    </div>
                </div>
            </section>
            <section className="px-4 mt-8">
                <div className="grid gap-4 md:gap-12 text-center md:grid-cols-2">
                    <div className="mb-8 p-3 bg-white rounded-lg md:mb-0">
                        <div className="mb-6 flex justify-center">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg" className="w-20 md:w-24 rounded-full shadow-lg" />
                        </div>
                        <p className="my-4 text-lg md:text-xl text-black ">
                            "I had the vegetarian pasta dish and it was amazing! The sauce was flavorful and the veggies were perfectly cooked. It was a great option for a meatless meal."
                        </p>
                        <p className="text-sm md:text-base italic">- Habiba Khanam</p>
                    </div>

                    <div className="mb-0 p-3 bg-white rounded-lg">
                        <div className="mb-6 flex justify-center">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg" className="w-24 rounded-full shadow-lg" />
                        </div>
                        <p className="my-4 text-xl text-black md:text-center lg:text-left">
                            "The restaurant had a wide variety of options on the menu and the staff was knowledgeable about dietary restrictions. I appreciated that they were able to accommodate my gluten-free needs and the food still tasted great."
                        </p>
                        <p className="italic text-center">- Nabila Khan</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;