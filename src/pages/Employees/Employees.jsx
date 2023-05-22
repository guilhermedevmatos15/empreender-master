import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// * Components
import Header from '../../components/layout/Header/Header';
import Table from '../../components/layout/Table/Table';
import ModalAdd from '../../components/Modals/ModalAdd/ModalAdd';
import ModalEdit from '../../components/Modals/ModalEdit/ModalEdit';

// * CSS
import './Employees.css';

// * Images

// * Icons
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

const Employees = (props) => {
   const navigation = useNavigate();

   const [username, setUsername] = useState(null);
   const [employees, setEmployees] = useState([]);
   const [currentId, setCurrentId] = useState(1);
   const [openModalAdd, setOpenModalAdd] = useState(false);
   const [openModalEdit, setOpenModalEdit] = useState(false);
   const [employeeEdit, setEmployeeEdit] = useState(null);

   // ? Things to do when page loads
   useEffect(() => {
      if (!localStorage.getItem('username')) {
         navigation('/Login');
      } else {
         setUsername(localStorage.getItem('username'));
      }

      // we test if we have data stored in LocalStorage, if we have we assign the data directly they are rendered, if we don't have data we simply do nothing
      try {
         let dataExisting =
            JSON.parse(localStorage.getItem('employees')).length === 0
               ? false
               : true;
         if (dataExisting) {
            setEmployees(JSON.parse(localStorage.getItem('employees')));
         }
      } catch (e) {
         console.log('No data');
      }
   }, []);

   // ? whenever there is an update in the 'employees' state, we update this in LocalStorage
   useEffect(() => {
      localStorage.setItem('employees', JSON.stringify(employees));
   }, [employees]);

   function editTask(id) {
      setOpenModalEdit(true);
      setEmployeeEdit(id);
   }

   function deleteEmployee(id) {
      const newEmployees = employees.filter((employee) => {
         return employee.id !== id;
      });

      return newEmployees;
   }

   const tableDataHead = [
      'Name',
      'Age',
      'Office',
      'Wage',
      'Email',
      'Contraction',
      'Status',
      'Actions',
   ];

   return (
      <div className="Employees">
         <Header username={username} />

         <div className="presentation">
            <h2>Employees</h2>
            <p>
               Welcome, <span className="username">{username}</span>
            </p>
         </div>

         <div className="employees-app">
            <button
               className="b-add-employee"
               onClick={(e) => setOpenModalAdd(true)}
            >
               Add Employee
            </button>
            <Table tableDataHead={tableDataHead}>
               {employees.map((employee, index) => {
                  return (
                     <tr
                        key={employee.name + ' ' + index}
                        className="employee-row"
                     >
                        <td>
                           <Link to={'/Employees/' + employee.name}>
                              {employee.name}
                           </Link>
                        </td>
                        <td>{employee.age}</td>
                        <td>{employee.office}</td>
                        <td>${Number(employee.wage).toFixed(2)}</td>
                        <td>{employee.email}</td>
                        <td>{employee.contraction}</td>
                        <td className={`employee-status ${employee.status}`}>
                           {employee.status}
                        </td>
                        <td className="action-buttons">
                           <button
                              className="b-edit"
                              onClick={(e) => editTask(employee.id)}
                           >
                              <AiFillEdit className="employee-button-icon" />{' '}
                              Edit
                           </button>
                           <button
                              className="b-delete"
                              onClick={(e) => {
                                 setEmployees(deleteEmployee(employee.id));
                              }}
                           >
                              <BsFillTrashFill className="employee-button-icon" />{' '}
                              Delete
                           </button>
                        </td>
                     </tr>
                  );
               })}
            </Table>
         </div>

         <ModalAdd
            open={openModalAdd}
            setOpen={setOpenModalAdd}
            employees={employees}
            setEmployees={setEmployees}
            currentId={currentId}
            setCurrentId={setCurrentId}
         />
         <ModalEdit
            open={openModalEdit}
            setOpen={setOpenModalEdit}
            employees={employees}
            setEmployees={setEmployees}
            // currentId={currentId}
            // setCurrentId={setCurrentId}
            employeeEdit={employeeEdit}
            setEmployeeEdit={setEmployeeEdit}
            deleteEmployee={deleteEmployee}
         />
      </div>
   );
};

export default Employees;
