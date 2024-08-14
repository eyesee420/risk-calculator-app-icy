import React from 'react'
import { Icon } from '@vaadin/react-components/Icon.js';

const Result = () => {

  return (
    <div className='h-full '>
        <div className='w-full h-full flex p-[5px] text-white'> 
          <div className='w-full h-full  flex justify-center items-center border-r-[1px] border-primary-color'>
            <div className='text-[12px]  md:text-[21px] font-bold'>
              17 points
            </div>
          </div>
          <div className='w-full h-full  flex justify-center items-center border-r-[1px] border-primary-color'>
            <div className='flex flex-col'>
            <div className='text-[12px] md:text-[21px] font-bold'>7.7%</div>
            <span className='text-[10px] md:text-[12px] font-bold'>1-year mortality</span>
            </div>
          </div>
          <div className='w-full h-full  flex justify-center items-center'>
          <div className='flex flex-col'>
          <div className='text-[12px] md:text-[21px] font-bold'>17.7%</div>
          <span className='text-[10px] md:text-[12px] font-bold'>3-year mortality</span>
          </div>
          </div>
        </div>
    </div>
    );      
}

export default Result;
 