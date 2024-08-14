import Heading, { Banner } from './components/Heading';
 
import AppContainer from './components/AppContainer';
 
import '@vaadin/icons';
import React from 'react';

// export const config: ViewConfig = {
//   menu: { order: 0, icon: 'line-awesome/svg/globe-solid.svg' },
//   title: 'Hello World',
// };



const  Application = () => {
const [toggle , setToggle] = React.useState('')

  // const name = useSignal('');
  document.documentElement.setAttribute(
    "theme","light"
  );

  return (
    <div>
    <Heading/>
      <div className='w-full flex justify-center  '>
        <div className='md:w-[90%] lg:w-[70%]  '> 
          <div className='md:grid-cols-2 md:grid'>
            <div className='w-full col-span-2 flex '>  
            <Banner/>
            </div>
            <div className='col-span-2'>
            <AppContainer/>
            </div>
          </div>
        </div>
      </div>
            {/* <Footer/> */}
    </div>
  );
}

export default Application
