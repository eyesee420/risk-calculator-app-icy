import { Button } from '@vaadin/react-components/Button.js';

import HealthCriteriaButton from './HealthCriteriaButton';
import InputItems from './InputItems';
import { InputChangeContainer } from './InputChangeContainer';
import NyhaClassSelector from './NyhaClassSelector';
import About from './About';
import { Icon } from '@vaadin/react-components/Icon.js';
import MenuButtons from './MenuButtons';
const Body = () => {
  return (

    <div>
        <div className='md:w-full md:flex md:justify-center'>
          {/* first container  */}
        <div className='mb-[20px] w-full sm:grid grid-cols-2  bg-pink- '>
          <div className='w-full h-auto  sm:flex sm:justify-between '>

          <div className='mx-[10px] md:m-[0px]   bg-red- sm:w-full lg:w-full '>
          <div className='sm:w-full md:w-[100%] lg:w-[90%] grid gap-[10px] bg-'>
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
          </div>

           <div className='mx-[10px] lg:my-[10px] sm:my-[10px]  bg- -500'>
           <div className=' line bg-secondary-background-color w-full h-[1px]   sm:w-[1px] sm:h-full  md:mx-[10px]  sm:mr-[10px] md:mr-[30px]'></div>
           </div>

          </div>

          {/* second container  */}
          <div className='w-full bg-red-  '>
        
          <div className='m-[10px] md:my-[10px] md:mr-0'>  
            
            <div className=' bg-  flex flex-col gap-[10px]  '>
            <HealthCriteriaButton title={'Gender '} selected={{label:'Female'}} val={[{label:'Female'},{label:'Male'}]}/> 
            <HealthCriteriaButton title={'Current Smoker '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'Diabetes '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'COPD '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'Heart failure first diagnosed ≥18 months ago'} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'Beta Blocker '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'ACEi/ARB '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            </div> 
            <div className='line w-full h-[1px] bg-secondary-background-color my-[20px]'></div>
  
            <div>
              <About/>
            </div>

            <div className='w-full flex justify-end gap-[5px]  mt-[5px]'>
              <Button className='w-[100px] text-button-text-color' theme="small">Advice
            </Button>
            <Button  className='w-[100px] text-button-text-color' theme="small">Formula 
            {/* <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:question-circle" /> */}
            </Button>
              </div>
           </div>

          </div>
        </div>

        </div>
    </div>
  )
}

export default Body
