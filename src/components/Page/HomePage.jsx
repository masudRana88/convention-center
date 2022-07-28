import React from 'react';
import HeroSlider from "../container/HeroSlider/HeroSlider"
import MomentSection from '../container/MomentSection/MomentSection';
const HomePage = () => {
    return (
    <div className='pt-[72px] bg-bgMain'>
        <HeroSlider/>
        <MomentSection/>
     </div>
    );
};

export default HomePage;