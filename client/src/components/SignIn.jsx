import React from 'react'
import { FormField } from './layout/FormField';
import { Link } from 'react-router-dom';

export const SignIn = () => {
    return(
        <div className="container">
          <FormField value="Email" title="email" type="email"/>
          <FormField value="Password" title="password1" type="password"/>
          <input type="submit" value="Sign In" className="btn btn-primary"/>
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
    );    
};
