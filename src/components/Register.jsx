import React from 'react'
import { FormField } from './layout/FormField';

export const Register = (params) => {
    return(
        <div className="container">
          <FormField value="Name" title="name"/>
          <FormField value="Email" title="email" type="email"/>
          <FormField value="Password" title="password1" type="password"/>
          <FormField value="Confirm Password" title="password2" type="password"/>
          <input type="submit" value="Register" className="btn btn-primary"/>
        </div>
    );    
};
