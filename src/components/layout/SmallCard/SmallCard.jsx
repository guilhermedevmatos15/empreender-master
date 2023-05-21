import React from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './SmallCard.css';

// * Images

// * Icons


const SmallCard = props => {
   const { title, subtitle } = props;

   return (
      <div className='SmallCard'>
         <h3>{title}</h3>
         <p>{subtitle}</p>
      </div>
   );
}

SmallCard.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string.isRequired,
};

export default SmallCard;