import React from 'react';

// * Components
import Navigator from '../Navigator/Navigator';

// * CSS
import './Menu.css';

// * Images

// * Icons
import { HiXMark } from "react-icons/hi2";

const Menu = props => {
   const { open, setOpen } = props;

   return (
      <div className={`Menu ${open ? 'open' : 'disable'}`}>
         <HiXMark className='icon-close' onClick={e => setOpen(false)} />
         <Navigator direction='column' gap='30px' theme='Dark' />
      </div>
   );
}

export default Menu;