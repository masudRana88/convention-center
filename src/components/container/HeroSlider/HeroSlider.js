import React from 'react';
import './HeroSlider.scss'
import { motion } from "framer-motion";
const HeroSlider = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
                {/* Slid 1 */}
                <div class="carousel-item active relative float-left w-full ">
                    <div className='my-slider-1 my-slider my-slider-filter'>
                        {/* Slide body */}
                        <div className='flex-wrap flex items-center justify-center px-2 absolute bottom-14 left-2/4 -translate-x-1/2 md:w-[639px] w-full '>
                            <h3 className='text-4xl text-center text-white md:text-5xl'>The perfect venue for your next event</h3>
                            <p className='mt-2 text-base text-center mx-auto text-white md:w-[70%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit </p>
                            <motion.button whileTap={{ scale: 0.98  }} type="button" class="mt-8 text-blue-600 mx-auto inline-block px-16 py-3 bg-white font-medium text-base leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">
                                Book Now
                            </motion.button>
                        </div>
                    </div>
                </div>
                {/* Slider 2 */}
                <div class="carousel-item  relative float-left w-full ">
                    <div className='my-slider my-slider-2 my-slider-filter'>
                        {/* Slide body */}
                        <div className='flex-wrap flex items-center justify-center px-2 absolute bottom-14 left-2/4 -translate-x-1/2 md:w-[639px] w-full '>
                            <h3 className='text-4xl text-center text-white md:text-5xl'>The perfect venue for your next event</h3>
                            <p className='mt-2 text-base text-center mx-auto text-white md:w-[70%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit </p>
                            <motion.button whileTap={{ scale: 0.98  }} type="button" class="mt-8 text-blue-600 mx-auto inline-block px-16 py-3 bg-white font-medium text-base leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">
                                Book Now
                            </motion.button>
                        </div>
                    </div>
                </div>
                {/* Slider 3 */}
                <div class="carousel-item  relative float-left w-full ">
                    <div className='my-slider my-slider-3 my-slider-filter'>
                        {/* Slide body */}
                        <div className='flex-wrap flex items-center justify-center px-2 absolute bottom-14 left-2/4 -translate-x-1/2 md:w-[639px] w-full '>
                            <h3 className='text-4xl text-center text-white md:text-5xl'>The perfect venue for your next event</h3>
                            <p className='mt-2 text-base text-center mx-auto text-white md:w-[70%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit </p>
                            <motion.button whileTap={{ scale: 0.98  }} type="button" class="mt-8 text-blue-600 mx-auto inline-block px-16 py-3 bg-white font-medium text-base leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">
                                Book Now
                            </motion.button>
                        </div>
                    </div>
                </div>

            </div>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroSlider;

