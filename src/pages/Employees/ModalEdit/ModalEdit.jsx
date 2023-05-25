import React, { useEffect, useState } from 'react';

// * Components

// * CSS
import './ModalEdit.css';

// * Images

// * Icons
import { HiXMark } from 'react-icons/hi2';

const ModalEdit = (props) => {
   const {
      open,
      setOpen,
      employees,
      setEmployees,
      currentId,
      setCurrentId,
      employeeEdit,
      setEmployeeEdit,
      deleteEmployee,
   } = props;

   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [office, setOffice] = useState('');
   const [wage, setWage] = useState('');
   const [email, setEmail] = useState('');
   const [contraction, setContraction] = useState('');
   const [status, setStatus] = useState('-');

   const [employeeData, setEmployeeData] = useState(null);

   useEffect(() => {
      const employeeSearch = employees.filter((employee) => {
         return employeeEdit === employee.id;
      });

      if (employeeSearch[0]) {
         setName(employeeSearch[0].name);
         setAge(employeeSearch[0].age);
         setOffice(employeeSearch[0].office);
         setWage(employeeSearch[0].wage);
         setEmail(employeeSearch[0].email);
         setContraction(employeeSearch[0].contraction);
         setStatus(employeeSearch[0].status);

         setEmployeeData(employeeSearch[0]);
      }
   }, [employeeEdit]);

   function checkInputsEmpty() {
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
         // Input Empty
         return true;
      }
      return false;
   }

   function checkDuplicateData() {
      const duplicateName = employees.some((employee, index) => {
         if (name === employee.name && employeeData.name !== name) {
            return true;
         } else {
            return false;
         }
      });
      const duplicateEmail = employees.some((employee, index) => {
         if (email === employee.email && employeeData.email !== email) {
            return true;
         } else {
            return false;
         }
      });

      if (duplicateName || duplicateEmail) {
         return true;
      }
      return false;
   }

   function handleClickEdit() {
      if (checkInputsEmpty()) {
         alert('Please, fill in all fields');
      } else if (checkDuplicateData()) {
         alert('Do not put data of other employees');
      } else {
         setEmployees(employees.map((employee) => {
            if (employee.id === employeeEdit) {
               return {
                  id: employee.id,
                  name,
                  age,
                  office,
                  wage,
                  email,
                  contraction,
                  status,
               };
            } else {
               return employee;
            }
         }));
         setEmployeeEdit(null);
         setOpen(false);
      }
   }

   return (
      <div className={`ModalEdit modal-animate ${open ? 'open' : 'disable'}`}>
         <HiXMark
            className="icon-close"
            onClick={(e) => {
               setOpen(false);
               setEmployeeEdit(null);
            }}
         />

         <h2>Edit Employee</h2>
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
                  value={status}
               >
                  <option value="-">-</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                  <option value="terminated">Terminated</option>
               </select>
            </label>

            <button
               className="b-add-employee"
               onClick={(e) => handleClickEdit()}
            >
               Edit Employee
            </button>
         </form>
      </div>
   );
};

export default ModalEdit;
