import React from 'react';
import { commentDate } from '../../../util/commentData';

const CommentSection = () => {
    return (
        <section className='w-full mt-16 md:mt-20'>
            <h3 className='mb-20 text-3xl font-bold text-center md:text-4xl'>Happy Clients says</h3>
            <div className='flex flex-wrap items-center justify-center w-full gap-10 px-4 md:px-0'>
            {commentDate.map(c =>(
                <div key={c.id} class="flex justify-center">
                <div class="block items-center justify-center rounded-lg py-5 px-12 shadow-commentShadow bg-white max-w-sm text-center">
                  <p className='mb-4 text-base font-normal text-center text-textGray'>{c.comment}</p>
                  <img src={c.image} alt='' className='mx-auto mb-4'/>
                  <h5 className='text-lg font-bold'>{c.name}</h5>
                  <p className='text-base text-textGray2'>{c.job}</p>
                </div>
              </div>
            ))}
            </div>
        </section>
    );
};

export default CommentSection;