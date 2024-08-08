import React from 'react'

 
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import useToggleStore from 'Frontend/store/toggleStore';
 



const Toogle = () => {
  const {theme ,toggleTheme} = useToggleStore.getState()
  const [isToggled, setToggle] = React.useState(theme === 'dark' ?true :false);



    // React.useEffect(() => {
    //   document.documentElement.setAttribute('theme', theme);
    // }, [theme]);


    const toggleStyle = {
        // backgroundColor: isToggled ? 'green' : 'red',
        color: isToggled ? '#fff' : 'white',
        fontSize: '24px'  
      };

      const handleToggle = ()=> {
      document.documentElement.setAttribute('theme', theme);
        
      }

    return (
      <Around duration={750}
      style={toggleStyle}
      onToggle={toggleTheme}
      reversed
        toggled={isToggled}
        toggle={setToggle}
        placeholder="Toggle Theme"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    );
  };
export default Toogle
