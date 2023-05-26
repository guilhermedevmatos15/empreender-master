import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// * Components

// * CSS
import './TodoHeader.css';

// * Scripts
import updateDate from '../../../utils/updateDate';

// * Images

// * Icons
import { FaPlus } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

const TodoHeader = ({setTodos}) => {
   const navigate = useNavigate();

   const [username, setUsername] = useState(null);
   const [date, setDate] = useState({});
   const [inputValue, setInputValue] = useState('');

   useEffect(() => {
      const user = localStorage.getItem('username');
      if (!user) {
         navigate('/Login');
      } else {
         setUsername(user);
      }

      setDate(updateDate(true));
   }, []);


   function createTodo(value) {
      setTodos(todos => {
         let newId = 0;
         try {
            newId = todos[todos.length - 1].id + 1;
         } catch(e) {
            
         }
         return [
            ...todos,
            {
               id: newId,
               task: String(value),
               completed: false
            }
         ]
      });
   }

   function handleClickCreate() {
      if (inputValue) {
         createTodo(inputValue);
         setInputValue('');
      } else {
         alert('Please, enter task name');
      }
   }

   return (
      <div className="TodoHeader">
         <div className='todo-presentation'>
            <div>
               <h2>
                  Hey, <span>{String(username).split(' ')[0]}</span>
               </h2>
               <p className="date-data">{`${date.day} ${date.month} ${date.year}   ${date.hours}:${date.minutes}`}</p>
            </div>
            <div className="icon-container">
               <AiOutlineUser className="icon-user" />
            </div>
         </div>
         <form onSubmit={(e) => e.preventDefault()}>
            <input 
               type="text"
               onChange={e => setInputValue(e.target.value)}
               value={inputValue}
               maxLength={50} 
               placeholder="Your Task" 
            />
            <button
               className="b-create-task"
               type="submit"
               onClick={(e) => handleClickCreate()}
            >
               <FaPlus className="plus-icon" />
            </button>
         </form>
         <hr />
      </div>
   );
};

export default TodoHeader;
