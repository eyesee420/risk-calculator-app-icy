import { Button, Icon } from '@vaadin/react-components'
import { useDialogStore } from 'Frontend/store/menuStore';
import { useTranslation } from "react-i18next";
 

const MenuButtons = () => {
  const { t } = useTranslation("app");
  const { openDialog } = useDialogStore();



  return (
    <div className='grid grid-cols-3 gap-[1px] mt-[10px] items-center bg-red- '>
    <Button onClick={openDialog} className='rounded-l-[6px] text-button-text-color rounded-r-[0px]' theme="small">{t('menu-title.title-1')} </Button>
    <Button className='rounded-[1px] text-button-text-color' theme="small">{t('menu-title.title-2')}
    <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:info-circle" />
    </Button>
    <Button className='rounded-r-[6px] text-button-text-color rounded-l-[0px]' theme="small">{t('menu-title.title-3')}
    <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:question-circle" />
    </Button>


  </div>
  )
}

export default MenuButtons
