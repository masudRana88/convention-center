import React from 'react';
import google from '../../../images/icons/Google Play Badge.png'
import apple from '../../../images/icons/App Store Badge.png'
const FooterSection = () => {
    return (
        <footer className='w-full h-64 mt-24 bg-bgBlack'>
            <div className='flex flex-wrap items-center justify-between w-full h-full px-4 mx-auto md:w-2/3 md:px-0'>
                <div className='hidden md:flex'>
                    <p className='text-textGrayLight '>© 2020 bike. All rights reserved</p>
                </div>
                <div className='flex flex-col items-center justify-center mx-auto md:mx-0'>
                    <span className='mb-2 text-textGrayLight'>Get the App</span>
                    <img className='mb-2' src={apple} alt=''/>
                    <img src={google} alt=''/>
                </div>
                <div className='flex w-full mx-auto md:hidden'>
                    <span className='inline mx-auto text-textGrayLight'>© 2020 bike. All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;