import { Avatar } from '@vaadin/react-components/Avatar.js'
 
import React from 'react'

const About = () => {
    const desc = 'Stuart Pocock, PhD, is a professor of medical statistics at the London School of Hygiene and Tropical Medicine. Dr. Pocock is a director of multiple research groups investigating epidemiology and pharmacoepidemiology. He has published many papers on major trials he has conducted, especially in cardiovascular disease.'
    const img_me= 'data:image/jpeg;base64,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'
    const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKY0twQE7--lO0BDEWS6RPJjfz9voerI-S2Q&s'
    return (
    <div style={{backgroundColor:'var(--primary-background-color)' ,color:'white'}} className='w-full rounded-[4px]  border-separate border-[1px] grid gap-[15px] '>
        <div>
            <div className='text-[12px] md:text-[14px] font-semibold ml-[10px] mt-[10px]'>ABOUT THE CREATOR </div>
            <div className='mx-[10px] mt-[5px] text-[10px] md:text-[12px] '>{desc}</div>
        </div>
        <div className='flex items-center justify-end'>
        <span className='mr-[10px] text-[12px] md:text-[14px]'>Dr. Stuart Pocock</span>
        <Avatar className='md:w-[42px] md:h-[42px] mr-[10px] mb-[10px]' img={img2} name={`tae`}  /> 
      
        </div>
   
    </div>
  )
}

export default About
        {/* <div className='flex items-center justify-start '>
        <Avatar className='w-[64px] h-[64px] ' img={img_me} name={`tae`}  /> 
        <span>Dr. Stuart Pocock</span>
        </div> */}