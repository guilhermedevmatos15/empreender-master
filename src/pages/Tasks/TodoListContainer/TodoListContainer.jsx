import React from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './TodoListContainer.css';

// * Images

// * Icons

const TodoListContainer = ({children}) => {
   return (
      <div className="TodoListContainer">
         {children}
      </div>
   );
};

TodoListContainer.propTypes = {
   prop: PropTypes,
};

export default TodoListContainer;
