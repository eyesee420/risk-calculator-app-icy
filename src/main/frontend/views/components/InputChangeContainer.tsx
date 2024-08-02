
import { useState } from "react";
import '@vaadin/icons';
import { Icon, TextField, Tooltip } from "@vaadin/react-components";



export  const InputChangeContainer = () => {
    const [title, setTitle] = useState("Normal: 0.7 - 13");
    const [desc, setDesc] = useState("mg/dL");
  
  
      const handleClick = () => {
  
        if (title === "Normal: 0.7 - 13") {
          setTitle("Normal: 62 - 115");
          setDesc("µmol/L");
        } else {
          setTitle("Normal: 0.7 - 13");
          setDesc("mg/dL");
        }
      };
    return(
      
      <TextField 
      className="w-full mt-[10px]"
      label="Creatinine :"
      theme=" helper-above-field "
      placeholder={title} 
      helperText="Note: while this score uses creatinine as a proxy for renal function, eGFR is generally considered a more accurate indicator"
      clearButtonVisible>
        <Tooltip slot="tooltip" text="tooltip" />
        <div slot="suffix" className="bg-secondary-background-color rounded-r-[3px] relative  right-0 h-full w-1/4 flex items-center justify-end pr-2">
        <span onClick={handleClick} className="cursor-pointer" style={{color:'var(--lumo-header-text-color)'}} slot="suffix">{desc}</span>
        {/* <Icon slot="prefix" style={{padding:'0.35rem'}} icon="vaadin:function" /> */}
        </div>
    </TextField>
    )
  
    
  }