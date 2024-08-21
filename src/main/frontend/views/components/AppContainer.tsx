import { Button } from '@vaadin/react-components/Button.js';

import HealthCriteriaButton from './HealthCriteriaButton';
import InputItems from './InputItems';
import { InputChangeContainer } from './InputChangeContainer';
import NyhaClassSelector from './NyhaClassSelector';
import About from './About';
import { Icon } from '@vaadin/react-components/Icon.js';
import MenuButtons from './MenuButtons';
import Result from './Result';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";
import MenuDialog1 from './Dialog/MenuDialog1';
 


const AppContainer = () => {


  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });
  const { t } = useTranslation("app");

  return (
    <div>
      {/* display result when mobile view*/}
        {isSmallScreen && (
             <div className='h-[60px] w-full   sticky top-[3px] z-50   '> 
             <div className='mx-2   h-full bg-secondary-background-color  rounded-[2px] border-[2px] border-button-text-color'>
             <Result/>
             </div>
           </div>
        )}

        <div className='md:w-full md:flex md:justify-center '>
        {/* grid container */}
        <div className='mb-[20px] w-full sm:grid grid-cols-2  gap-[20px] ' >

        {/* first container  */}
        <div className='mx-[10px] md:m-0 sm:w-full lg:w-full '>
        <div className='md:flex h-full '> 
        <div className='sm:w-full md:w-[100%] grid gap-[10px] '>
        <div> 
          <MenuButtons  />
          <MenuDialog1 />
        
        </div>
        <div className='line w-full h-[1px] bg-secondary-background-color '></div>
        <InputItems inputProps={{label:t('forms.age.label'),suffix:t('forms.age.suffix') }} />
        <InputItems inputProps={{label:t('forms.ejection_fraction.label') ,placeholder:'' ,suffix:'%'}} />
        <InputItems inputProps={{label:t('forms.sbp.label') ,placeholder:t('forms.sbp.placeholder') ,suffix:t('forms.sbp.suffix') }} />    
        <InputItems inputProps={{label:t('forms.bmi.label'),placeholder:t('forms.bmi.placeholder') ,suffix:t('forms.bmi.suffix')}} />
        <InputChangeContainer />
        <NyhaClassSelector/>
        </div>
        <div className='line invisible md:visible  sm:w-[1px] sm:h-full  bg-secondary-background-color sm:ml-[30px] my-[10px]'></div>
        </div>
        </div>

        {/* second container  */}
        <div className='w-full  bg- -500  '>
        <div className='mx-[10px]  md:mt-[20px] md:mx-0 '>  
        <div className='grid grid-cols-1 gap-[20px]  '>
        <HealthCriteriaButton 
          title={t('criteria_buttons.gender.title')} 
          selectedId="female"
          items={[
            { id: 'female', value: t('criteria_buttons.gender.female') },
            { id: 'male', value: t('criteria_buttons.gender.male') }
          ]}
        /> 
        <HealthCriteriaButton 
          title={t('criteria_buttons.smoker.title')} 
          selectedId="1"
          items={[
            { id: '1', value: t('criteria_buttons.smoker.no') },
            { id: '2', value: t('criteria_buttons.smoker.yes') }
          ]}
        /> 
        <HealthCriteriaButton 
          title={t('criteria_buttons.diabetes.title')} 
          selectedId="1"
          items={[
            { id: '1', value: t('criteria_buttons.diabetes.no') },
            { id: '2', value: t('criteria_buttons.diabetes.yes') }
          ]}
        /> 
        <HealthCriteriaButton 
          title={t('criteria_buttons.copd.title')} 
          selectedId="1"
          items={[
            { id: '1', value: t('criteria_buttons.copd.no')},
            { id: '2', value:t('criteria_buttons.copd.yes') }
          ]}
        /> 
        <HealthCriteriaButton 
          title={t('criteria_buttons.diagnosed.title')} 
          selectedId="1"
          items={[
            { id: '1',  value:t('criteria_buttons.diagnosed.no') },
            { id: '2', value:t('criteria_buttons.diagnosed.yes') }
          ]}
        /> 
        <HealthCriteriaButton 
          title={t('criteria_buttons.blocker.title')} 
          selectedId="1"
          items={[
            { id: '1', value: t('criteria_buttons.blocker.no') },
            { id: '2', value: t('criteria_buttons.blocker.yes') }
          ]}
        /> 
        <HealthCriteriaButton 
          title={t('criteria_buttons.acei.title')} 
          selectedId="1"
          items={[
            { id: '1', value: t('criteria_buttons.acei.no')},
            { id: '2', value: t('criteria_buttons.acei.yes')}
          ]}
        /> 
        </div> 
        <div className='line w-full h-[1px] bg-secondary-background-color my-[20px]'></div>

        {/* display result when desktop view */}
          {!isSmallScreen ? (
            <div className='h-[100px] w-full  bg-secondary-background-color  rounded-[2px] border-[2px] border-button-text-color'> 
                <Result/>
              </div>
        ) : (
          <>
          <About/>
          </>
        )}

        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AppContainer
