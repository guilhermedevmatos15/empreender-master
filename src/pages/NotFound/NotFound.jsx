import React from 'react';
import { Link } from 'react-router-dom';

// * Components

// * CSS
import './NotFound.css';

// * Images
import Illustration from '../../assets/img/Illustrations/undraw_page_not_found_re_e9o6.svg';

// * Icons


const NotFound = props => {
   return (
      <div className='NotFound'>
         <img src={Illustration} alt="Illustration 404 error" />
         <h1>Page Not Found</h1>
         <p>Sorry, the page you were looking for was not found</p>
         <Link to={'/'}>
            <button className='b-go-to-home'>Go to Home</button>
         </Link>
      </div>
   );
}

export default NotFound;