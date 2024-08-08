import Heading, { Banner } from './components/Heading';
import Result from './components/Result';
import AppContainer from './components/AppContainer';
import { Classic } from "@theme-toggles/react"

import '@vaadin/icons';
import Toogle from './components/Toogle';
import React from 'react';

// export const config: ViewConfig = {
//   menu: { order: 0, icon: 'line-awesome/svg/globe-solid.svg' },
//   title: 'Hello World',
// };


// document.documentElement.setAttribute('theme', 'light');

const  Application = () => {
const [toggle , setToggle] = React.useState('')

  // const name = useSignal('');
  document.documentElement.setAttribute(
    "theme","light"
  );

// const handleToggle

  return (
<div>
  {/* eyesee
 <Toogle/> */}
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
