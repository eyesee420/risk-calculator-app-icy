import React from 'react'
import LocaleSelecttion from './LocaleSelecttion';
import { Icon } from '@vaadin/react-components';
import ToggleTheme from './ToggleTheme';

export const Banner = () => (
  <div className='w-full sm:flex sm:flex-col sm:items-start   mx-[5px] ' style={{backgroundColor:''}}>
    <div className='text-[12px] font-semibold  mt-[5px]  lg:text-[14px] ' >Estimates 1- and 3- year mortality in heart failure.</div>
    <div className='text-[12px] mb-[5px]'>Note: while this score uses creatinine as a proxy for renal function, eGFR is generally considered a more accurate indicator</div>

  </div>
);

const Heading = () => {
  return (
    <>
      <div  className='w-full h-[40px] flex justify-between items-center bg-primary-color' style={{backgroundColor:'#748E63'}}>
        <div className='ml-[20px] text-header-text-color' >Grop - [ Risk Calculator for Heart Failure ]</div>

        <div className='flex items-center mr-[20px]'>
        <div className='mr-[20px]'> 
          <LocaleSelecttion/>
        </div>
        <div>
        {/* <Icon className='text-white' style={{ height: '21px', width: '21px' }} slot={'suffix'} icon="vaadin:adjust" /> */}
        <ToggleTheme/>
        </div>
        </div>
      </div>
      {/* <Banner /> */}
    </>
  )
}

export default Heading;
