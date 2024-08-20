import '@vaadin/icons';
import { Icon, TextField, Tooltip } from "@vaadin/react-components";
import { useTranslation } from "react-i18next";
import { useState , useEffect  } from "react";

export  const InputChangeContainer = () => {
  const { t, i18n } = useTranslation("app");

  const [title, setTitle] = useState(t('forms.creatinine.placeholder.label_second'));
  const [desc, setDesc] = useState("mg/dL");

  const handleClick = () => {
    if (title === t('forms.creatinine.placeholder.label_first')) {
      setTitle(t('forms.creatinine.placeholder.label_second'));
      setDesc("µmol/L");
    } else {
      setTitle(t('forms.creatinine.placeholder.label_first'));
      setDesc("mg/dL");
    }
  };

  // Update state when language changes
  useEffect(() => {
    if (title === t('forms.creatinine.placeholder.label_first')) {
      setTitle(t('forms.creatinine.placeholder.label_first'));
    } else {
      setTitle(t('forms.creatinine.placeholder.label_second'));
    }
  }, [i18n.language, t]); // This effect runs whenever the language changes

  
    return(
      <TextField 
        className="creatinine  w-full mt-[10px]"
        label={t('forms.creatinine.label')}
        theme=" helper-above-field "
        placeholder={title} 
        helperText={t('forms.creatinine.note-title')+t('forms.creatinine.note-desc')}
        clearButtonVisible>
          {/* <Tooltip slot="tooltip" text="tooltip" /> */}
          <div slot="suffix" className="bg-secondary-background-color rounded-r-[3px] relative  right-0 h-full w-1/4 flex items-center justify-end pr-2">
          <span onClick={handleClick} className="cursor-pointer" style={{color:'var(--lumo-header-text-color)'}} slot="suffix">{desc}</span>
          {/* <Icon slot="prefix" style={{padding:'0.35rem'}} icon="vaadin:function" /> */}
          </div>
    </TextField>
    )
  
    
  }