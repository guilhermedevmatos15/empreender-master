import React from 'react';
import { useParams } from 'react-router-dom';

// * Components

// * CSS
import './Employee.css';

// * Images

// * Icons


const Employee = props => {
   const { Employee } = useParams();

   return (
      <div className='Employee'>
         {Employee}
      </div>
   );
}

export default Employee;