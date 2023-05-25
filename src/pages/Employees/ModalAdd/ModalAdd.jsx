import React, { useState } from 'react';

// * Components

// * CSS
import './ModalAdd.css';

// * Images

// * Icons
import { HiXMark } from 'react-icons/hi2';

const ModalAdd = (props) => {
   const { open, setOpen, employees, setEmployees, currentId, setCurrentId } = props;

   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [office, setOffice] = useState('');
   const [wage, setWage] = useState('');
   const [email, setEmail] = useState('');
   const [contraction, setContraction] = useState('');
   const [status, setStatus] = useState('-');

   const checkInputsEmpty = () => {
      if (
         !name ||
         !age ||
         !office ||
         !wage ||
         !email ||
         !contraction ||
         !status ||
         status === '-'
      ) {
         // Input Vazio
         return true;
      }
      return false;
   };

   function handleClickAdd() {
      let employeeExisting = false;
      let employeeEmailExisting = false;

      employees.forEach(employee => {
         if (String(employee.name) === String(name)) {
            employeeExisting = true;
         }
      });
      employees.forEach(employee => {
         if (String(employee.email) === String(email)) {
            employeeEmailExisting = true;
         }
      });

      if (!checkInputsEmpty()) {
         if (employeeExisting) {
            alert('Employee already informed');
         } else if (employeeEmailExisting) {
            alert('This email has already been reported')
         } else {
            // Add
            setEmployees([
               ...employees,
               {
                  id: currentId,
                  name,
                  age,
                  office,
                  wage,
                  email,
                  contraction,
                  status,
               },
            ]);
            
            setCurrentId(currentId + 1);
         }
      } else {
         alert('Plase, enter all employee details');
      }
   }

   return (
      <div className={`ModalAdd modal-animate ${open ? 'open' : 'disable'}`}>
         <HiXMark className="icon-close" onClick={(e) => setOpen(false)} />

         <h2>Add Employee</h2>
         <form onSubmit={(e) => e.preventDefault()} autoComplete="on">
            <label>
               <span>Name</span>
               <input
                  type="text"
                  onChange={(e) => {
                     setName(e.target.value);
                  }}
                  value={name}
               />
            </label>
            <label>
               <span>Age</span>
               <input
                  type="number"
                  min={0}
                  max={140}
                  onChange={(e) => {
                     setAge(e.target.value);
                  }}
                  value={age}
               />
            </label>
            <label>
               <span>Office</span>
               <input
                  type="text"
                  onChange={(e) => {
                     setOffice(e.target.value);
                  }}
                  value={office}
               />
            </label>
            <label>
               <span>Wage (US Dollar)</span>
               <input
                  type="number"
                  onChange={(e) => {
                     setWage(e.target.value);
                  }}
                  min={0}
                  value={wage}
               />
            </label>
            <label>
               <span>Email</span>
               <input
                  type="email"
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }}
                  value={email}
               />
            </label>
            <label>
               <span>Contraction</span>
               <input
                  type="date"
                  onChange={(e) => {
                     setContraction(e.target.value);
                  }}
                  value={contraction}
               />
            </label>
            <label>
               <span>Status</span>
               <select
                  name="status-employee"
                  id="status-employee"
                  onChange={(e) => {
                     setStatus(e.target.value);
                  }}
               >
                  <option value="-">-</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                  <option value="terminated">Terminated</option>
               </select>
            </label>

            <button className="b-add-employee" onClick={(e) => handleClickAdd()}>
               Add Employee
            </button>
         </form>
      </div>
   );
};

export default ModalAdd;
