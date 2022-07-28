import React from 'react';
import HeroSlider from "../container/HeroSlider/HeroSlider"
import MomentSection from '../container/MomentSection/MomentSection';
import PackageSection from '../container/PackageSection/PackageSection';
const HomePage = () => {
    return (
    <div className='pt-[72px] bg-bgMain'>
        <HeroSlider/>
        <MomentSection/>
        <PackageSection/>
     </div>
    );
};

export default HomePage;