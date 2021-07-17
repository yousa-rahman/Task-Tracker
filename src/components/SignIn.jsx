import React from 'react'
import { FormField } from './layout/FormField';

export const SignIn = (params) => {
    return(
        <div className="container">
          <FormField value="Email" title="email" type="email"/>
          <FormField value="Password" title="password1" type="password"/>
          <input type="submit" value="Sign In" className="btn btn-primary"/>
        </div>
    );    
};
