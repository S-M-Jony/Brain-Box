import React from 'react';
import Answers from './Answers';
import classes from '../styles/Question.module.css';
export default function Question(){
    return(
        <div class={classes.question}>
        <div class={classes.qtitle}>
          <span class="material-icons-outlined"> help_outline </span>
          Here goes the question from Department of cse,Comilla University?
        </div>
        <Answers></Answers>
        </div>
    );
}