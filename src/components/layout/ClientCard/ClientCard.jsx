import React from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './ClientCard.css';

// * Images

// * Icons


const ClientCard = props => {
   const { name, text, image, gender } = props;

   return (
      <div className={`ClientCard ${gender}`}>
         <img src={image} alt={`Client ${name}`} />
         <p className='client-text'>{text}</p>
         <h3 className='client-name'>{name}</h3>
      </div>
   );
}

ClientCard.propTypes = {
   name: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   gender: PropTypes.string.isRequired,
};

export default ClientCard;