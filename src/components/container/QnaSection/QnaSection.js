import React from 'react';
import people from "../../../images/album/people.png"
import { qnaData } from '../../../util/qnaData';
const QnaSection = () => {
    return (
        <section className='w-full mt-16 md:mt-20'>
            <h3 className='mb-20 text-3xl font-bold text-center md:text-4xl'>Frequently Asked Questions</h3>
            <div className='flex flex-col items-center justify-center px-4 gap-7 md:flex-row '>
                <div className='flex justify-center w-full md:w-1/2 md:hidden'>
                    <img src={people} alt='' className='h-auto shadow-lg w-[546px]'/>
                </div>
                <div className='flex justify-center w-full md:justify-end md:w-1/2'>
                    <div className='w-[552px]'>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                        {
                            qnaData.map(qna=>(
                        <div key={qna.id} class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id={qna.control2}>
                            <button class={`accordion-button
                            ${!qna.show && "collapsed"}
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none`} type="button" data-bs-toggle="collapse" data-bs-target={`#${qna.control}`}
                                aria-expanded="false" aria-controls={qna.control}>
                                {qna.q}
                            </button>
                            </h2>
                            <div id={qna.control} class={`accordion-collapse border-0 collapse ${qna.show && "show"} `}
                            aria-labelledby={qna.control2} data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
                                demonstrate
                                the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className='justify-start hidden w-full md:flex md:w-1/2'>
                    <img src={people} alt='' className='h-auto shadow-lg w-[546px]'/>
                </div>
            </div>
        </section>
    );
};

export default QnaSection;