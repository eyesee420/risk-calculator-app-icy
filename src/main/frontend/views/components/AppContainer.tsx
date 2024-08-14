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
 

const AppContainer = () => {


  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

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
          <MenuButtons/>
        </div>
        <div className='line w-full h-[1px] bg-secondary-background-color '></div>
        <InputItems inputProps={{label:'Age' ,tooltip:'Age' ,suffix:'years' }} />
        <InputItems inputProps={{label:'Ejection Fraction' ,tooltip:'Ejection Fraction', placeholder:'' ,suffix:'%'}} />
        <InputItems inputProps={{label:'sBP' ,tooltip:'sBP', placeholder:'Normal: 100 - 200' ,suffix:'mm Hg'}} />    
        <InputItems inputProps={{label:'BMI' ,tooltip:'BMI', placeholder:'Normal: 100 - 200' ,suffix:'kg/m²'}} />
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
        <HealthCriteriaButton title={'Gender '} selected={{label:'Female'}} val={[{label:'Female'},{label:'Male'}]}/> 
        <HealthCriteriaButton title={'Current Smoker '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
        <HealthCriteriaButton title={'Diabetes '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
        <HealthCriteriaButton title={'COPD '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
        <HealthCriteriaButton title={'Heart failure first diagnosed ≥18 months ago'} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
        <HealthCriteriaButton title={'Beta Blocker '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
        <HealthCriteriaButton title={'ACEi/ARB '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
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
