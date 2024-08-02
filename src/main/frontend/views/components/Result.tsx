import React from 'react'
import { Icon } from '@vaadin/react-components/Icon.js';

const Result = () => {
  return (
    <div className='w-full flex-col justify-center    pt-[5px] px-[5px] md:pr-0'>
      <div className='w-full   rounded-[2px] p-[2px]       bg-secondary-background-color'>

<div className='h-[40px]  '>
      <div className='flex justify-center items-center  h-full  bg- -100  text-white'>
          <div className='flex md:flex-col justify-center  flex-row  lg:flex-row  items-center mx-[10px]  bg- -500'>

                <div className=' mr-[10px]' >9</div>
                <div className='bg-re d-50'>points</div>
                
              </div>
            <div className='h-full w-[1px] bg-white rounded-[24px]'></div>
            <div className='w-full flex    md:flex-col   flex-row   lg:flex-row   justify-center  items-center bg- -500'>

                <div className='mr-[10px]'>3.6%</div>
                <div>1-year mortality</div>
              </div>
              <div className='h-full w-[1px] bg-white rounded-[24px]'></div>


              <div className='w-full    flex md:flex-col flex-row  lg:flex-row   justify-center  items-center bg- -500'>


                <div className='mr-[10px]'>9.2</div>
                <div>3-year mortality</div>
              </div>
          </div>
      


 
        </div>
        <div className='w-full flex justify-end bg- -100  '>
         
        <div className='mr-[10px] text-white'><Icon style={{ height: '12px', width: '12px' }}  icon="vaadin:copy-o" /></div>
        <div className='text-white mr-[10px]'><Icon style={{ height: '12px', width: '12px' }}  icon="vaadin:download-alt" /></div>
      </div>
      </div>
    </div>
  );
}

export default Result;

