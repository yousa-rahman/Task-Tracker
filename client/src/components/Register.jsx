import React , {useState} from 'react'
import { FormField } from './layout/FormField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export const Register = () => {

    let history = useHistory();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
           
    
    const {name, email, password, password2} = formData;
    

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        if(password !== password2){
             toast.error("Passwords do Not Match", {hideProgressBar: true, autoClose: 3000});
        }else{
            await axios.post("http://localhost:5000/register", {
                name: name,
                email: email,
                password: password
            }).then(()=> toast.success("Sucessfuly Registered", {hideProgressBar: true, autoClose: 3000}),history.push('/task')).catch((error) => toast.error(error.response.data.errors[0].msg, {hideProgressBar: true, autoClose: 3000}));

        }
    }

    return(
        <div className="container">
        <ToastContainer/>
        <form action="" className="form" method="post">
          <FormField display="Name" value={name} title="name" onChange={e => onChange(e)}/>
          <FormField display="Email" value={email} title="email" inputType="email" onChange={e => onChange(e)}/>
          <FormField display="Password" value={password} title="password" inputType="password" onChange={e => onChange(e)}/>
          <FormField display="Confirm Password" value={password2} title="password2" inputType="password" onChange={e => onChange(e)}/>
          <input type="submit" value="Register" className="btn btn-primary" onClick={e => onSubmit(e)}/>
        </form>
        <p className="my-1">
            Already have an account? <Link to="/signin">Sign In</Link>
        </p>
        </div>
    );    

    
};
