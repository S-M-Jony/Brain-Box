import React from 'react';
import Account from './Account';
import classes from '../styles/Nav.module.css';
import logo from '../assets/images/logo2.jpeg';
import {Link} from 'react-router-dom';

export default function Nav(){
    return(
        <nav className={classes.nav}>
          <ul>
            <li>
            <Link to="/" className={classes.brand}>
            <img src={logo} alt="Department Of CSE Logo" />
            <h3>Department Of CSE, Comilla University</h3>
            </Link>
            </li>
         </ul>

         <Account/>

        </nav>
       
      
    );
}


