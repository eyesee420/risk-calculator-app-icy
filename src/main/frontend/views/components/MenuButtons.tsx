import { Button, Icon } from '@vaadin/react-components'
import React from 'react'

const MenuButtons = () => {
  return (
    <div className='grid grid-cols-3 gap-[1px] mt-[10px] items-center bg-red- '>
    <Button className='rounded-l-[6px] text-button-text-color rounded-r-[0px]' theme="small">When to Use
    </Button>
    <Button className='rounded-[1px] text-button-text-color' theme="small">Pearls/Pitfalls 
    <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:info-circle" />
    </Button>
    <Button className='rounded-r-[6px] text-button-text-color rounded-l-[0px]' theme="small">Why Use 
    <Icon style={{ height: '12px', width: '12px' }} slot={'suffix'} icon="vaadin:question-circle" />
    </Button>


  </div>
  )
}

export default MenuButtons
