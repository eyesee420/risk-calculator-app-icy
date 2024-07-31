import { TextField, Tooltip } from "@vaadin/react-components";
import React from "react";


interface InputProps {
    label: string;
    placeholder?: string;
    tooltip: string;
    suffix?: string;
    
  }

  const InputItems = <T extends InputProps>({ inputProps , inputvalue , val}: { inputProps: T ,inputvalue?:any ,val?:any}) => {

    const [inputValues, setInputValues] = React.useState('');


  return (
        <TextField 
            className="w-full"
            label={inputProps.label} 
            clearButtonVisible
            placeholder={inputProps.placeholder}
            
            value={val}
            onChange={inputvalue}
            >
        <Tooltip slot="tooltip" text={inputProps.tooltip} />
          <div slot="suffix" className="bg-primary-color rounded-r-[3px] relative right-0 h-full w-1/4 flex items-center justify-end pr-2">
          <span slot="suffix" className='text-header-text-color font-medium' style={{color:'var(--lumo-header-text-color)'}}>{inputProps.suffix}</span>
          </div>
        </TextField>

  )
}

export default InputItems