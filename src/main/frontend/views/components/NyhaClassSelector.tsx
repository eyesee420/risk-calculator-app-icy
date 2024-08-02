
// import { useTranslation } from "react-i18next";

import { ListBox, Item } from "@vaadin/react-components";

const NyhaClassSelector = () => {
//   const { t } = useTranslation("app");

  
  return (
    <div className='w-full  flex justify-between  mb-[10px] '>
    <p  className='text-[12px] lg:text-[14px] text-secondary-text-color'>{'NYHA Class :'}</p>
    <ListBox className= 'w-[200px] sm:w-[300px] bg-primary-background-color p-[5px]  rounded-[4px]' 
     selectedValues={[0]} >
      <Item className='nyhaclass text-[12px] lg:text-[14px] pr-[10px] ' 
      selected>
        <div className='flex  justify-between    text-header-text-color  '> 
        <span>{'Class I'}</span>
        <span>0</span>
        </div>
        
      </Item>
      
      <Item className='nyhaclass text-[12px] lg:text-[14px] pr-[10px]'>
        <div className='flex  justify-between    text-header-text-color '> 
        <span>{'Class II'}</span>
        <span>+2</span>
        </div>
      </Item>
      <Item className='nyhaclass text-[12px] lg:text-[14px] pr-[10px]'>
        <div className='flex  justify-between    text-header-text-color '> 
        <span>{'Class III'}</span>
        <span>+6</span>
        </div>
      </Item>

      <Item className='nyhaclass text-[12px] lg:text-[14px] pr-[10px]'>
        <div className='flex  justify-between    text-header-text-color '> 
        <span>{'Class IV'}</span>
        <span>+8</span>
        </div>
      </Item>

    </ListBox>
    </div>

  );
};

export default NyhaClassSelector;
