import React, { useEffect, useState } from 'react';

// * components

// * CSS
import './TodoModalEdit.css';

// * scripts

// * img

// * icons
import { HiXMark } from 'react-icons/hi2';

const TodoModalEdit = ({ open, setOpen, todos, setTodos, id }) => {
   const [currentEdit, setCurrentEdit] = useState(null);
   const [possibleRender, setPossibleRender] = useState(false);
   const [inputValue, setInputValue] = useState('');

   useEffect(() => {
      const todoEdit = todos.find((todo) => {
         return todo.id === id;
      });

      if (todoEdit) {
         setCurrentEdit(todoEdit);
         setPossibleRender(true);
      } else {
         setPossibleRender(false);
      }
   }, [todos, currentEdit, id]);


   function handleClickEdit() {
      if (inputValue) {
         setTodos(
            todos.map((todo) => {
               if (todo.id === currentEdit.id) {
                  return {
                     ...todo,
                     task: String(inputValue),
                  };
               } else {
                  return todo;
               }
            })
         );
         setOpen(false);
      } else {
         alert('Plase, enter task name');
      }
   }

   return (
      <div
         className={`TodoModalEdit modal-animate ${open ? 'open' : 'disable'}`}
      >
         {possibleRender && (
            <>
               <HiXMark className='icon-xmark' onClick={e => {setOpen(false)}} />

               <h2>Edit Task</h2>
               <p>You are editing the task: <br />"<span className='task-name'>{currentEdit.task}</span>"</p>
               <form onSubmit={(e) => e.preventDefault()}></form>
               <input
                  type="text"
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={e => {if (e.key === 'Enter') {
                     handleClickEdit();
                  }}}
                  value={inputValue}
                  maxLength={50}
                  onLoad={e => e.target.focus()}
               />
               <button onClick={e => handleClickEdit()}>Confirm Edit</button>
            </>
         )}
      </div>
   );
};

export default TodoModalEdit;
