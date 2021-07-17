import React , {useState} from 'react'
import { FormField } from './layout/FormField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const {name, email, password1, password2} = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(password1 !== password2){
             toast.error("Passwords do Not Match");
        }else{
            console.log(formData)
        }
    }

    return(
        <div className="container">
        <ToastContainer/>
        <form action="" className="form">
          <FormField display="Name" value={name} title="name" onChange={e => onChange(e)}/>
          <FormField display="Email" value={email} title="email" inputType="email" onChange={e => onChange(e)}/>
          <FormField display="Password" value={password1} title="password1" inputType="password" onChange={e => onChange(e)}/>
          <FormField display="Confirm Password" value={password2} title="password2" inputType="password" onChange={e => onChange(e)}/>
          <input type="submit" value="Register" className="btn btn-primary" onClick={e => onSubmit(e)}/>
        </form>
        </div>
    );    
};
