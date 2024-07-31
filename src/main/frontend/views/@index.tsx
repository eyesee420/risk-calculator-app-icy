import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Button } from '@vaadin/react-components/Button.js';
import { Notification } from '@vaadin/react-components/Notification.js';
import { TextField } from '@vaadin/react-components/TextField.js';
import { HelloWorldService } from 'Frontend/generated/endpoints.js';

import HealthCriteriaButton from './components/HealthCriteriaButton';
import InputItems from './components/InputItems';
import Footer from './components/Footer';
import Heading from './components/Heading';
import { InputChangeContainer } from './components/InputChangeContainer';
import NyhaClassSelector from './components/NyhaClassSelector';
import Result from './components/Result';
import About from './components/About';
import { Icon } from '@vaadin/react-components/Icon.js';
import Menu from './components/Menu';
 

// export const config: ViewConfig = {
//   menu: { order: 0, icon: 'line-awesome/svg/globe-solid.svg' },
//   title: 'Hello World',
// };



const  Application = () => {
  // const name = useSignal('');
  document.documentElement.setAttribute(
    "theme","light"
  );
  // const Notification = Notification.show('Financial report generated', {
  //   position: 'top-start',
  //   duration: 0,
  //   theme: 'success',
  // });
  return (
      <div >
        {/* <Result/> */}
        
        <Heading/>
        <div className='md:w-full md:flex md:justify-center'>
        <div className='mb-[20px] w-full sm:grid grid-cols-2 md:w-[90%] md:bg- lg:w-[70%] '>

          <div className='w-full h-auto  sm:flex sm:justify-between   bg- '>
          {/* <div className='mx-[10px] md:m-[0px] md:flex md:justify-start bg-red-500 '> */}
          <div className='mx-[10px] md:m-[0px]   bg-red- sm:w-full   lg:w-full '>

            <div className='sm:w-full md:w-[100%] lg:w-[90%] grid gap-[10px] bg-    '>

              {/* buttonss */}
          <div className='grid grid-cols-3 gap-[1px] mt-[10px] items-center'>
 
            <Button className='rounded-l-[6px] text-button-text-color' theme="small">When to Use
        
            </Button>
            <Button className='rounded-[1px] text-button-text-color' theme="small">Pearls/Pitfalls 
            <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:info-circle" />
            </Button>
            <Button className='rounded-r-[6px] text-button-text-color' theme="small">Why Use 
            <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:question-circle" />
            </Button>


          </div>
          {/* <Menu/> */}
 
          <div className='w-full h-[1px] bg-line-color  '></div>
          {/* <Result/> */}

          <InputItems inputProps={{label:'Age' ,tooltip:'Age' ,suffix:'years' }} />
          <InputItems inputProps={{label:'Ejection Fraction' ,tooltip:'Ejection Fraction', placeholder:'' ,suffix:'%'}} />
          <InputItems inputProps={{label:'sBP' ,tooltip:'sBP', placeholder:'Normal: 100 - 200' ,suffix:'mm Hg'}} />    
          <InputItems inputProps={{label:'BMI' ,tooltip:'BMI', placeholder:'Normal: 100 - 200' ,suffix:'kg/m²'}} />
          <InputChangeContainer />
          <NyhaClassSelector/>

            </div>
          

           </div>
           <div className='mx-[10px] lg:my-[10px] sm:my-[10px]  bg--500'>
           <div style={{backgroundColor:'var(--line-color)'}} className='w-full h-[1px]   sm:w-[1px] sm:h-full  md:mx-[10px]  sm:mr-[10px] md:mr-[30px]'></div>

           </div>
           {/* <div className='w-full h-[1px]   sm:w-[1px] sm:h-full bg-white  sm:mr-[10px] md:mr-[30px]'></div> */}

          </div>





          <div className='w-full h-auto '>
        
          <div className='m-[10px]'>  

            <div className=' bg-  flex flex-col gap-[10px]  '>
 
            <HealthCriteriaButton title={'Gender '} selected={{label:'Female'}} val={[{label:'Female'},{label:'Male'}]}/> 
            <HealthCriteriaButton title={'Current Smoker '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'Diabetes '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'COPD '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'Heart failure first diagnosed ≥18 months ago'} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'Beta Blocker '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            <HealthCriteriaButton title={'ACEi/ARB '} selected={{label:'No'}} val={[{label:'No'},{label:'yes'}]}/> 
            </div> 
            <div className='w-full h-[1px] bg-line-color my-[20px]'></div>
  
            <div>
              <About/>
            </div>

            <div className='w-full flex justify-end gap-[5px]  mt-[5px]'>
              <Button className='w-[100px] text-button-text-color' theme="small">Advice
            {/* <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:info-circle" /> */}
            </Button>
            <Button  className='w-[100px] text-button-text-color' theme="small">Formula 
            {/* <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:question-circle" /> */}
            </Button>
              </div>
           </div>

          </div>
        </div>
        </div>
        <Footer/>
      </div>
  );
}

export default Application
