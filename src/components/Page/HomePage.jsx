import React from 'react';
import CommentSection from '../container/CommentSection/CommentSection';
import HeroSlider from "../container/HeroSlider/HeroSlider"
import MomentSection from '../container/MomentSection/MomentSection';
import PackageSection from '../container/PackageSection/PackageSection';
import QnaSection from '../container/QnaSection/QnaSection';
const HomePage = () => {
    return (
    <div className='pt-[72px] bg-bgMain'>
        <HeroSlider/>
        <MomentSection/>
        <PackageSection/>
        <CommentSection/>
        <QnaSection/>
     </div>
    );
};

export default HomePage;