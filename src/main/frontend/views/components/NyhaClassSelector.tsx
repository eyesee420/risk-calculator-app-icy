
import { useTranslation } from "react-i18next";

import { ListBox, Item } from "@vaadin/react-components";

const NyhaClassSelector = () => {
  const { t } = useTranslation("app");

  interface ListItem<T> {
    id: string;
    name: string;
    value: T;
  }
  const items: ListItem<string>[] = [
    { id: '1', name: t('forms.nyha_class.class.one'), value: '0' }, 
    { id: '2', name: t('forms.nyha_class.class.two'), value: '+2' }, 
    { id: '3', name: t('forms.nyha_class.class.three'), value: '+6' }, 
    { id: '4', name: t('forms.nyha_class.class.four'), value: '+8' }, 
    
  ];
  
  return (
    <div className='w-full  flex justify-between  mb-[10px] '>
    <p  className='text-[12px] lg:text-[14px] text-secondary-text-color'>{t('forms.nyha_class.label')}</p>
    <ListBox className= 'w-[200px] sm:w-[300px] bg-primary-background-color p-[5px]  rounded-[4px]' 
     selectedValues={[0]} >
      {
        items.map((t , i ) => (
          <Item className='nyhaclass text-[12px] lg:text-[14px] pr-[10px] ' 
          key={i}
          // selected
          >
            <div className='flex  justify-between text-header-text-color  '> 
            <span>{t.name}</span>
            <span>{t.value}</span>
            </div>
          </Item>
        ))
      }

    </ListBox>
    </div>

  );
};

export default NyhaClassSelector;



{/* <Item className='nyhaclass text-[12px] lg:text-[14px] pr-[10px] ' 
selected>
  <div className='flex  justify-between    text-header-text-color  '> 
  <span>{t('forms.nyha_class.class.one')}</span>
  <span>0</span>
  </div>
</Item>

<Item 
  className='nyhaclass text-[12px] lg:text-[14px] pr-[10px]'>
  <div className='flex  justify-between    text-header-text-color '> 
  <span>{t('forms.nyha_class.class.two')}</span>
  <span>+2</span>
  </div>
</Item>
<Item 
  className='nyhaclass text-[12px] lg:text-[14px] pr-[10px]'>
  <div className='flex  justify-between    text-header-text-color '> 
  <span>{t('forms.nyha_class.class.three')}</span>
  <span>+6</span>
  </div>
</Item>

<Item 
  className='nyhaclass text-[12px] lg:text-[14px] pr-[10px]'>
  <div className='flex  justify-between    text-header-text-color '> 
  <span>{t('forms.nyha_class.class.four')}</span>
  <span>+8</span>
  </div>
</Item>  */}