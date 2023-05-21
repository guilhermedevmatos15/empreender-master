import React from 'react';

// * Components

// * CSS
import './ToggleButton.css';

// * Images

// * Icons

const ToggleButton = props => {
   const { inputCheck, setInputCheck } = props;

   return (
      <label className="ToggleButton">
         <input 
            type="checkbox"
            value={inputCheck}
            onChange={e => {
               if (e.target.checked) {
                  setInputCheck(true);
               } else {
                  setInputCheck(false);
               }
            }}
         />
         <span className="slider round"></span>
      </label>
   );
};

export default ToggleButton;
