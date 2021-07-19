import React, {useState } from 'react'
import { FormField } from './layout/FormField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const AddTask = () => {
    let history = useHistory();
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        assignee: ''
    })

    // const [assignee, setAssignee] = useState('');

    // axios.get("http://localhost:5000/addtask",{})
           
    
    const {title, description, assignee} = taskData;
    
    
    const onChange = e => {
        setTaskData({...taskData, [e.target.name]: e.target.value});
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/addtask", {
                title: title,
                description: description,
                assignee: assignee
            }).then(()=> toast.success("Task added successfully", {hideProgressBar: true, autoClose: 3000}),history.push('/task')).catch((error) => toast.error(error.response.data.errors[0].msg, {hideProgressBar: true, autoClose: 3000}));
        
    }
    
    return (
        <div className="container">
            <form action="" method="post">
                <ToastContainer/>
                <FormField title="title" display="Task Title" value={title} onChange={(e) => onChange(e)}/>
                
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="description" name="description" rows="4" columns="5" onChange={(e) => onChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="assignee" className="form-label">Assignee</label>
                    <select type="text" className="form-select" id="assignee" name="assignee" onChange={(e) => onChange(e)}>
                        <option value=""></option>
                        <option value="001">User</option>
                        <option value="002">User 1</option>
                        <option value="003">User 2</option>
                    </select>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary" onClick={(e) => onSubmit(e)}/>
            </form>
        </div>
    );
    
};

