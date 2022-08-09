import React from 'react';
import classes from '../styles/Account.module.css'; 
import {Link} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
export default function Account(){
  const {currentUser ,logout} = useAuth(); 
    return(
        <div className={classes.account}>
        {currentUser ? (
          <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span class="material-icons-outlined" title="Logout" onClick={logout}> {" "} logout{" "} </span> 
          </>
        ) : (
          <>
              <Link to="/Signup">Signup</Link>
              <Link to="/Login">Login</Link>
         
          </>
        )}

        
      </div>
    );
}