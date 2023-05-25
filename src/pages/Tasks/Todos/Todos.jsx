import React from 'react';
import PropTypes from 'prop-types';

// * Components
import TodoItem from '../TodoItem/TodoItem';

// * CSS
import './Todos.css';

// * Images

// * Icons

const Todos = ({ todos, setTodos }) => {
   const renderTodos = () => {
      return todos.map((todo) => {
         return (
            <TodoItem todos={todos} setTodos={setTodos} task={todo.task} id={Number(todo.id)} completed={todo.completed} key={todo.id} />
         );
      })
   }

   return (
      <div className="Todos">
         {renderTodos()}
      </div>
   );
};

Todos.propTypes = {
   todos: PropTypes.array.isRequired,
};

export default Todos;
