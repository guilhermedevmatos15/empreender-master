import React, { useEffect, useState } from 'react';

// * Components

// * CSS
import './Presentation.css';

// * Images

// * Icons

const Presentation = (props) => {
   const { page } = props;
   const [username, setUsername] = useState('');

   useEffect(() => {
      const user = localStorage.getItem('username');

      if (user) {
         setUsername(user);
      }
   }, []);

   return (
      <div className="Presentation">
         <h2>{page}</h2>
         <p>
            Welcome, <span className="username">{username}</span>
         </p>
      </div>
   );
};

export default Presentation;
