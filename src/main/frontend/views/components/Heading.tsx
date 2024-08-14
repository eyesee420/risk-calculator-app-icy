import React from 'react'
import LocaleSelection from './LocaleSelection';
import { Icon } from '@vaadin/react-components';
import ToggleTheme from './ToggleTheme';
import Toogle from './Toogle';

import { useMediaQuery } from 'react-responsive';


export const Banner = () => (
  <div className='w-full sm:flex sm:flex-col sm:items-start   mx-[5px]  my-[10px]' style={{backgroundColor:''}}>
    <div className='text-[12px] font-semibold    lg:text-[14px] ' >Estimates 1- and 3- year mortality in heart failure.</div>
    <div className='text-[12px]  '>Note: while this score uses creatinine as a proxy for renal function, eGFR is generally considered a more accurate indicator</div>

  </div>
);

const Heading = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <>
      <div  className='w-full h-[40px] flex justify-between items-center bg-primary-color' style={{backgroundColor:'#748E63'}}>

  {!isSmallScreen ? (
        <div className='ml-[5px] text-[12px] sm:text-[14px] md:ml-[20px] text-header-text-color ' >Grop - [ Risk Calculator for Heart Failure ]</div>
          ) : (
            <div className='text-[16px] text-header-text-color ml-[5px] font-bold' >Grop 💔</div>
          )}


        {/* <div className='ml-[5px] text-[12px] sm:text-[14px] md:ml-[20px] text-header-text-color ' >Grop - [ Risk Calculator for Heart Failure ]</div> */}

        <div className='flex items-center mr-[20px]'>
        <div className='mr-[20px]'> 
          <LocaleSelection/>
        </div>

        <div className=' flex items-center'>


        <Toogle/>
          
        </div>
        </div>
      </div>
      {/* <Banner /> */}
    </>
  )
}

export default Heading;
