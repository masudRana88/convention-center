import React, { useState } from 'react';
import wedding from "../../../images/album/wedding.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import gift from '../../../images/icons/Vector.svg'
import { MdClose } from "react-icons/md";
const MomentSection = () => {
    const [ isClip, setIsClip ] = useState(true)
    return (
        <section className='flex flex-col w-full gap-5 mt-10 md:flex-row md:mt-40 md:gap-10 lg:ga20'>
            {/* ----------- MD --------- */}
            <div className='justify-center hidden w-1/2 px-2 md:flex md:justify-end'>
                <img src={wedding} alt='' className='h-auto shadow-lg'/>
            </div>
            <div className='relative flex-col justify-center hidden w-full px-5 md:flex md:w-1/2 md:px-0'>
                <h3 className='mb-3 text-2xl font-bold md:text-4xl text-slate-900'>Every moment is Precious</h3>
                <p className='w-full mb-3 text-base text-textGray md:w-1/2'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div class="flex space-x-2 justify-center md:justify-start w-full ">
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block px-6 py-2.5 bg-bgBlue text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                    >Explore our album <IoIosArrowRoundForward className='inline ml-1 text-xl'/></button>
                </div>
                {/* clip */}
                <div className={`absolute top-50 left-10 lg:left-36 justify-center gap-2 shadow-xl px-8 py-2 bg-white border-l-[8px] border-solid rounded border-sky-500 ${isClip? "flex": "hidden"}`}>
                    <img src={gift} alt='' className='inline'/><p className='inline font-semibold text-textClip'>20% off on next booking</p>
                    <MdClose className='-mt-1 -mr-7' onClick={()=>setIsClip(false)}/>
                </div>
            </div>
            {/* ----------- Mobile ----------- */}
            <div className='relative flex flex-col justify-center w-full px-5 md:hidden md:px-0'>
                <h3 className='mb-3 text-2xl font-bold text-center md:text-4xl text-slate-900'>Every moment is Precious</h3>
                <p className='w-full mb-3 text-base text-center text-textGray '>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                {/* clip */}
                <div className={`absolute top-10 left-8  justify-center gap-2 shadow-xl px-8 py-2 bg-white border-l-[8px] border-solid rounded border-sky-500 ${isClip? "flex": "hidden"}`}>
                    <img src={gift} alt='' className='inline'/><p className='inline font-semibold text-textClip'>20% off on next booking</p>
                    <MdClose className='-mt-1 -mr-7' onClick={()=>setIsClip(false)}/>
                </div>
            </div>
            <div className='flex flex-col justify-center w-full gap-3 px-5 md:hidden md:px-0 md:justify-end '>
                <img src={wedding} alt='' className='h-auto shadow-lg'/>
                <div class="flex space-x-2 justify-center md:justify-start w-full ">
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block px-6 py-2.5 bg-bgBlue text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                    >Explore our album <IoIosArrowRoundForward className='inline ml-1 text-xl'/></button>
                </div>
            </div>
        </section>
    );
};

export default MomentSection;