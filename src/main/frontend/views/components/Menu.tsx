import React from 'react';
import { MenuBar } from '@vaadin/react-components/MenuBar.js';

const Menu = () => {
    const items = [
        { text: 'View' },
        { text: 'Edit' },
        {
          text: 'Share',
          children: [
            {
              text: 'On social media',
              children: [{ text: 'Facebook' }, { text: 'Twitter' }, { text: 'Instagram' }],
            },
            { text: 'By email' },
            { text: 'Get link' },
          ],
        },
        {
          text: 'Move',
          children: [{ text: 'To folder' }, { text: 'To trash' }],
        },
        { text: 'Duplicate' },
      ];
    
      return <MenuBar items={items} />;
}

export default Menu
