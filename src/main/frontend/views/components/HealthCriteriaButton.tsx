  import { Button } from '@vaadin/react-components';
  import React from 'react'

  const HealthCriteriaButton = ({  val, selected: initialSelected , title } : { val:{label:string}[] ,selected:{label:string}  , title:string}) => {
      const [selected, setSelected] = React.useState(initialSelected);
    
      const handleClick = (label:string) => {
        setSelected({ label });
      };
    
      return (
        <div className=' '>
           <div className='flex justify-center '>
            <div className='w-full text-[12px] lg:text-[13px] font-semibold '>{title}</div>
              <div className='flex gap-[10px] '>
              {val.map((t) => (
                <Button 
                  key={t.label}
                  onClick={() => handleClick(t.label)}
                  className="w-[100px] rounded-[1px] text-[12px] lg:text-[14px]"
                  style={{ color:'#fff', backgroundColor: selected.label === t.label ? ' var(--secondary-background-color)' : 'var(--lumo-disabled-text-color)'}}
                >
                  {t.label}
            
                </Button>
              ))}
              </div>
          </div>

        </div>
      );
    };
    
    export default HealthCriteriaButton;
