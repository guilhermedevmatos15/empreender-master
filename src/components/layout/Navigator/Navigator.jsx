import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// * Components

// * CSS
import './Navigator.css';

// * Images

// * Icons

const Navigator = (props) => {
   const { direction, gap, theme } = props;

   return (
      <nav className="Navigator">
         <ul className={`${theme}`} style={{ display: 'flex', flexDirection: (direction === 'column' ? 'column' : 'row'), gap: gap }}>
            <li>
               <Link to={'/'}><span>Home</span></Link>
            </li>
            <li>
               <Link to={'/Employees'}><span>Employees</span></Link>
            </li>
            <li>
               <Link to={'/Tasks'}><span>Tasks</span></Link>
            </li>
            <li>
               <Link to={'/Blog'}><span>Blog</span></Link>
            </li>
            <li>
               <Link to={'/About'}><span>About</span></Link>
            </li>
            <li>
               <Link to={'/Profile'}><span>Profile</span></Link>
            </li>
            <li>
               <Link to={'/Login'}>
                  <button className="b-login" type='button'>Login</button>
               </Link>
            </li>
         </ul>
      </nav>
   );
};

Navigator.propTypes = {
   direction: PropTypes.string,
   gap: PropTypes.string,
   theme: PropTypes.string,
};

Navigator.defaultProps = {
   direction: 'row',
   gap: '20px',
   theme: 'Light',
};

export default Navigator;
