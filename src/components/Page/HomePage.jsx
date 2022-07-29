import React from 'react';
import CommentSection from '../container/CommentSection/CommentSection';
import HeroSlider from "../container/HeroSlider/HeroSlider"
import MomentSection from '../container/MomentSection/MomentSection';
import PackageSection from '../container/PackageSection/PackageSection';
const HomePage = () => {
    return (
    <div className='pt-[72px] bg-bgMain'>
        <HeroSlider/>
        <MomentSection/>
        <PackageSection/>
        <CommentSection/>
     </div>
    );
};

export default HomePage;