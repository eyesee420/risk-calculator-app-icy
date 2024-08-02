import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Button } from '@vaadin/react-components/Button.js';
import { Notification } from '@vaadin/react-components/Notification.js';
import { TextField } from '@vaadin/react-components/TextField.js';
import { HelloWorldService } from 'Frontend/generated/endpoints.js';

import HealthCriteriaButton from './components/HealthCriteriaButton';
import InputItems from './components/InputItems';
import Footer from './components/Footer';
import Heading, { Banner } from './components/Heading';
import { InputChangeContainer } from './components/InputChangeContainer';
import NyhaClassSelector from './components/NyhaClassSelector';
import Result from './components/Result';
import About from './components/About';
import { Icon } from '@vaadin/react-components/Icon.js';
import Menu from './components/Menu';
import Body from './components/Body';

import '@vaadin/icons';

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


    <div className='w-full flex justify-center  '>
    <div className='md:w-[90%] lg:w-[70%]  '> 
      <div className='   md:grid-cols-5 md:grid'>


        <div className='w-full col-span-3 flex  '>
        <Banner/>
        </div>
        <div className='w-full col-span-2 sticky top-0  md:static z-50'  >
        <Result/>

        </div>


          <div className='child3 col-span-5    '>
          <Body/>
          </div>
  
        </div>

        </div>
        </div>
        {/* <Footer/> */}
      </div>
  );
}

export default Application
