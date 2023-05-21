import React from 'react';

// * Components

// * CSS
import './Footer.css';

// * Images
import Logo from '../../../assets/img/e-master-high-resolution-logo-white-on-transparent-background.png';

// * Icons

const Footer = (props) => {
   return (
      <footer>
         <img src={Logo} alt="logo empreender master" />
         <p>Simplify. Manage. Succeed.</p>
         <p className="developer">
            Aplication made by:{' '}
            <a
               href="https://github.com/guilhermedevmatos15"
               target="_blank"
               rel="noreferrer"
            >
               &copy;Guilherme Ferreira
            </a>
         </p>
      </footer>
   );
};

export default Footer;
