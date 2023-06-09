import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// * Components
import Navigator from '../Navigator/Navigator';
// import ToggleButton from '../ToggleButton/ToggleButton';

// * CSS
import './Header.css';

// * Images
import Logo from '../../../assets/img/e-master-high-resolution-logo-color-on-transparent-background.png';

// * Icons
import { RxHamburgerMenu } from 'react-icons/rx';
import Menu from '../Menu/Menu';

const Header = (props) => {
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <header className="Header">
         <Link to={'/'}>
            <img src={Logo} alt="Logo Empreender Master" />
         </Link>

         <Navigator direction="row" gap='30px' theme="Light" />

         <RxHamburgerMenu
            className="menu-icon"
            onClick={(e) => setOpenMenu(true)}
         />

         <Menu open={openMenu} setOpen={setOpenMenu} />
      </header>
   );
};

export default Header;
