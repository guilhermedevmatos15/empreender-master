import React, { useEffect, useState } from 'react';

// * Components
import Header from '../../components/layout/Header/Header';
import PresentationPage from '../../components/layout/Presentation/Presentation';
import TodoListContainer from './TodoListContainer/TodoListContainer';
import TodoHeader from './TodoHeader/TodoHeader';
import Todos from './Todos/Todos';

// * CSS
import './Tasks.css';

// * Images

// * Icons

const Tasks = (props) => {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      try {
         const todosData = JSON.parse(localStorage.getItem('todos'));
         if (todosData.length) {
            setTodos(JSON.parse(localStorage.getItem('todos')));
         }
      } catch (e) {
         setTodos([]);
      }
   }, []);
   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   return (
      <div className="Tasks">
         <Header />
         <PresentationPage page="Tasks" />
         <div style={{ padding: '5px'}}>
            <TodoListContainer>
               <TodoHeader setTodos={setTodos} />
               <Todos todos={todos} setTodos={setTodos} />
            </TodoListContainer>
         </div>
      </div>
   );
};

export default Tasks;
