import React from 'react';
// import Form from '../Form';
import Illustration from '../Illustration';
// import classes from '../../styles/Signup.module.css';
// import TextInput from "../TextInput"; 
// import Checkbox from "../../components/Checkbox"
// import Button from '../Button';
import SignupForm from "../SignupForm"
export default function Signup(){
    return(
        <>
        <h1>Create an account</h1>
        <div className="column">
            <Illustration />
            <SignupForm></SignupForm>
        </div>
        </>
    );
}