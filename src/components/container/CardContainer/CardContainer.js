import React from 'react';
import { cardData } from '../../../util/cardData';
import { MdCheck } from "react-icons/md";
const CardContainer = () => {
    return (
        <div className='flex flex-wrap items-center justify-center w-full gap-6 md:mt-28'>
            {cardData.map(card=><div className={`w-[292px] h-[480px] p-[30px] rounded-3xl ${card.type === "pro" ? "bg-cardWatermark bg-CardBg bg-no-repeat bg-right-bottom shadow-cardShadow text-white md:-mt-28 relative":""}  `}>
            <span
                class="px-4 py-2 rounded-full text-white bg-hotRed font-semibold text-sm flex align-center w-max cursor-pointer  transition duration-300 ease absolute top-0 right-4 -translate-y-4">
                Hot
            </span>
                <p className='text-[36px] font-bold mb-[20px]'>${card.price}</p>
                <h3 className='text-[28px] font-bold mb-[20px]'>{card.name}</h3>
                <p className='text-base mb-[13px]'>{card.describe}</p>
                {card.info.map(i=>
                <div className='flex item-center mb-[10px]'>
                    <div className='w-[20px] h-[20px] rounded-full bg-BgChack flex items-center justify-center mr-2'>
                        <MdCheck/>
                    </div>
                        <p className='-mt-1'>{i}</p>
                </div>)}
                <button type="button" class={`mt-6 text-CardBg font-semibold w-full inline-block px-6 py-2.5  ${card.type === "pro"? "bg-white":"bg-CardBtnBg"}  leading-tight rounded-full  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Choose plan</button>
            </div>)}
        </div>
    );
};

export default CardContainer;