import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// * Components

// * CSS
import './Login.css';

// * Images
import Logo from '../../assets/img/e-master-high-resolution-logo-color-on-transparent-background.png';
import Illustration from '../../assets/img/Illustrations/undraw_working_remotely_re_6b3a.svg';

// * Icons

const Login = (props) => {
   const navigation = useNavigate();

   const [password, setPassword] = useState(null);
   const [username, setUsername] = useState(null);
   const [passwordInput, setPasswordInput] = useState(null);

   useEffect(() => {
      function getRandomIntInclusive(min = 0, max = 0) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      setPassword(Number(getRandomIntInclusive(100, 1000)));
   }, []);

   useEffect(() => {
      if (localStorage.getItem('username')) {
         navigation('/Employees');
      }
   }, []);

   function handleClickLogin(e) {
      if (
         username === null ||
         username === '' ||
         passwordInput === null ||
         passwordInput === ''
      ) {
         alert('Please fill in the input fields');
         return;
      } else if (String(username).length >= 12) {
         alert('Enter a shorter username');
         return;
      }

      if (Number(passwordInput) === password) {
         localStorage.setItem('username', username);
         navigation('/Employees');
      } else if (username.length < 3) {
         alert('Username too short');
      } else {
         alert('Incorrect password');
      }
   }

   return (
      <div className="Login">
         <div className="login-conteiner">
            <div className="login-content">
               <img src={Logo} alt="logo" />
               <h2>Welcome Back</h2>
               <form autoComplete="off">
                  <label>
                     <span>Username</span>
                     <input
                        type="text"
                        placeholder="Your Username"
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </label>
                  <label>
                     <span>Password</span>
                     <input
                        type="text"
                        placeholder="System password"
                        onChange={(e) => setPasswordInput(e.target.value)}
                     />
                  </label>
                  <button
                     type="button"
                     className="b-login"
                     onClick={(e) => handleClickLogin(e)}
                  >
                     Log In
                  </button>
               </form>
               <p className="login-password-dont">
                  Don't know system password?{' '}
                  <span onClick={(e) => alert(`The password is: ${password}`)}>
                     Click Me!
                  </span>
               </p>
            </div>
            <div className="login-image">
               <img src={Illustration} alt="illustration" />
            </div>
         </div>
      </div>
   );
};

export default Login;
