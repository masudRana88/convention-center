import React from 'react';
import './HeroSlider.scss'
import { motion } from "framer-motion";
import {Link } from "react-router-dom";
const HeroSlider = () => {
    return (
        <div id="carouselExampleCaptions" className="relative carousel slide" data-bs-ride="carousel">
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
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
            <div className="relative w-full overflow-hidden carousel-inner">
                {/* Slid 1 */}
                <div className="relative float-left w-full carousel-item active ">
                    <div className='my-slider-1 my-slider my-slider-filter '>
                        {/* Slide body */}
                        <div className='flex-wrap flex items-center justify-center px-2 absolute bottom-14 left-2/4 -translate-x-1/2 md:w-[639px] w-full '>
                            <h3 className='text-4xl text-center text-white md:text-5xl'>The perfect venue for your next event</h3>
                            <p className='mt-2 text-base text-center mx-auto text-white md:w-[70%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit </p>
                            <a href='#package'>
                            <motion.button whileTap={{ scale: 0.98  }} type="button" className="inline-block px-16 py-3 mx-auto mt-8 text-base font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out bg-white shadow-md rounded-xl hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                Book Now
                            </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slider 2 */}
                <div className="relative float-left w-full carousel-item ">
                    <div className='my-slider my-slider-2 my-slider-filter'>
                        {/* Slide body */}
                        <div className='flex-wrap flex items-center justify-center px-2 absolute bottom-14 left-2/4 -translate-x-1/2 md:w-[639px] w-full '>
                            <h3 className='text-4xl text-center text-white md:text-5xl'>The perfect venue for your next event</h3>
                            <p className='mt-2 text-base text-center mx-auto text-white md:w-[70%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit </p>
                            <a href='#package'>
                            <motion.button whileTap={{ scale: 0.98  }} type="button" className="inline-block px-16 py-3 mx-auto mt-8 text-base font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out bg-white shadow-md rounded-xl hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                Book Now
                            </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slider 3 */}
                <div className="relative float-left w-full carousel-item ">
                    <div className='my-slider my-slider-3 my-slider-filter'>
                        {/* Slide body */}
                        <div className='flex-wrap flex items-center justify-center px-2 absolute bottom-14 left-2/4 -translate-x-1/2 md:w-[639px] w-full '>
                            <h3 className='text-4xl text-center text-white md:text-5xl'>The perfect venue for your next event</h3>
                            <p className='mt-2 text-base text-center mx-auto text-white md:w-[70%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit </p>
                            <a href='#package'>
                            <motion.button whileTap={{ scale: 0.98  }} type="button" className="inline-block px-16 py-3 mx-auto mt-8 text-base font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out bg-white shadow-md rounded-xl hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                Book Now
                            </motion.button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <button
                className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="inline-block bg-no-repeat carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="inline-block bg-no-repeat carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroSlider;

