import React, { useState } from 'react';
import PropTypes from 'prop-types';

// * Components
import TodoModalEdit from '../TodoModalEdit/TodoModalEdit';

// * CSS
import './TodoItem.css';

// * scripts
import updateTasksId from '../updateTasksId';

// * Images

// * Icons
import {
   MdModeEdit,
   MdOutlineCheckBox,
   MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';

const TodoItem = ({ todos, setTodos, task, id, completed }) => {
   const [openModalEdit, setOpenModalEdit] = useState(false);
   const [todoEditId, setTodoEditId] = useState(null);

   const toogleComplet = (id) => {
      setTodos(
         todos.map((todo) => {
            if (todo.id === id) {
               return {
                  ...todo,
                  completed: !todo.completed,
               };
            } else {
               return todo;
            }
         })
      );
   };
   const editTodoItem = (id) => {
      setOpenModalEdit(true);
      setTodoEditId(id);
   };
   const deleteTodoItem = (id) => {
      const newTodos = todos.filter((todo) => {
         return todo.id !== id;
      });

      setTodos(updateTasksId(newTodos));
   };

   return (
      <div className={`TodoItem ${completed ? 'completed' : ''}`}>
         <div className="todoItem-infos">
            {completed ? (
               <MdOutlineCheckBox
                  className="icon-box"
                  onClick={(e) => toogleComplet(id)}
               />
            ) : (
               <MdOutlineCheckBoxOutlineBlank
                  className="icon-box"
                  onClick={(e) => toogleComplet(id)}
               />
            )}
            <span className="task-name" onClick={(e) => toogleComplet(id)}>
               {task}
            </span>
         </div>
         <div className="todo-buttons">
            <button onClick={(e) => editTodoItem(id)} className="b-todo-edit">
               <MdModeEdit />
            </button>
            <button onClick={(e) => deleteTodoItem(id)} className="b-todo-trash">
               <BsFillTrashFill />
            </button>
         </div>

         {
            <TodoModalEdit
               todos={todos}
               setTodos={setTodos}
               open={openModalEdit}
               setOpen={setOpenModalEdit}
               id={todoEditId}
            />
         }
      </div>
   );
};

TodoItem.propTypes = {
   task: PropTypes.string.isRequired,
   id: PropTypes.number.isRequired,
};

export default TodoItem;
