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
   const username = localStorage.getItem('username');

   return (
      <div className={`Menu ${open ? 'open' : 'disable'}`}>
         <HiXMark className='icon-close' onClick={e => setOpen(false)} />
         <Navigator direction='column' gap='30px' theme='Dark' username={username} />
      </div>
   );
}

export default Menu;