import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// * Components
import Header from '../../components/layout/Header/Header';

// * CSS
import './Employee.css';

// * Images

// * Icons
import { BsDownload } from 'react-icons/bs';

const Employee = (props) => {
   const navigate = useNavigate();
   const { employeeName } = useParams();

   const [employeeRender, setEmployeeRender] = useState(null);
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');


   useEffect(() => {
      const employees = JSON.parse(localStorage.getItem('employees'));

      const employee = employees.find((employee) => {
         if (employee.name === String(employeeName)) {
            return true;
         } else {
            return false;
         }
      });

      if (employee) {
         setEmployeeRender(employee);

         // Logic for name employee
         const nameSplit = employee.name.split(' ');
         setFirstName(nameSplit[0]);
         if (nameSplit[0] === nameSplit[nameSplit.length - 1]) {
            setLastName('');
         } else {
            setLastName(nameSplit[nameSplit.length - 1]);
         }

      } else {
         setEmployeeRender(null);
      }
   }, [employeeName]);

   return (
      <div className="Employee">
         <Header />

         {employeeRender !== null ? (
            <>
               <div className="presentation">
                  <h2>Information from: <span>{employeeRender.name}</span></h2>
                  <button
                     className="b-to-go-back"
                     onClick={(e) => navigate('/Employees')}
                  >
                     To Go Back
                  </button>
               </div>

               <div className="employee-informations">
                  <h1>Employee Profile</h1>
                  <hr />
                  <div className="row-information">
                     <div>
                        <p>First Name</p>
                        <p className="information">{firstName}</p>
                     </div>
                     <div>
                        <p>Last Name</p>
                        <p className="information">{lastName}</p>
                     </div>
                  </div>
                  <div className="row-information">
                     <div>
                        <p>Age</p>
                        <p className="information">
                           {employeeRender.age}
                        </p>
                     </div>
                     <div>
                        <p>Office</p>
                        <p className="information">{employeeRender.office}</p>
                     </div>
                  </div>
                  <div className="row-information">
                     <div>
                        <p>Wage (USD)</p>
                        <p className="information">
                           ${Number(employeeRender.wage).toFixed(2)}
                        </p>
                     </div>
                     <div>
                        <p>Contraction</p>
                        <p className="information">
                           {employeeRender.contraction}
                        </p>
                     </div>
                  </div>
                  <div className="row-information row-only">
                     <div>
                        <p>Email</p>
                        <p className="information">{employeeRender.email}</p>
                     </div>
                  </div>
                  <div className="row-information row-only">
                     <div>
                        <p>Status</p>
                        <p
                           className={`information status ${employeeRender.status}`}
                        >
                           {employeeRender.status}
                        </p>
                     </div>
                  </div>
               </div>
            </>
         ) : (
            <div className='search-employee'>
               <BsDownload className="icon-load" />
               <p>Search Employee...</p>
            </div>
         )}
      </div>
   );
};

export default Employee;
