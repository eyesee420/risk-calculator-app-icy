import React from 'react'
import LocaleSelection from './LocaleSelection';
import { Icon } from '@vaadin/react-components';
import ToggleTheme from './ToggleTheme';
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';


export const Banner = () => {
  const { t } = useTranslation("app");
  
  return (
  <div className='w-full sm:flex sm:flex-col sm:items-start md:px-0   px-[5px] my-[10px]' style={{backgroundColor:'  '}}>
    <div className='text-[12px] font-semibold    lg:text-[14px] ' >{t('introduction.banner_text1')}</div>
    <div className='text-[12px]  '>{t('introduction.banner_text2')}</div>

  </div>
  )
}

const Heading = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });
  const { t } = useTranslation("app");

  return (
    <>
      <div  className='w-full h-[40px] flex justify-between items-center bg-primary-color' style={{backgroundColor:'#748E63'}}>

      {!isSmallScreen ? (
        <div className='ml-[5px] text-[12px] sm:text-[14px] md:ml-[20px] text-header-text-color ' >{t('heading.title')}</div>
          ) : (
            <div className='text-[16px] text-header-text-color ml-[5px] font-bold' >Grop 💔</div>
          )}
        <div className='flex items-center mr-[20px]'>
        <div className='mr-[20px]'> 
          <LocaleSelection/>
        </div>
        <div className=' flex items-center'>
        <ToggleTheme/>
        </div>
        </div>
      </div>
    </>
  )
}

export default Heading;
