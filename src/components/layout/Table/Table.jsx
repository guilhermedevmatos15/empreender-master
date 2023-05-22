import React from 'react';

// * Components

// * CSS
import './Table.css';

// * Images

// * Icons

const Table = (props) => {
   const { tableDataHead } = props;

   return (
      <table className="Table">
         <thead>
            <tr>
               {tableDataHead.map((data, index) => {
                  return (
                     <th key={`${data}_${index}`}>{data}</th>
                  )
               })}
            </tr>
         </thead>
         <tbody>
            {props.children}
         </tbody>
      </table>
   );
};

export default Table;
