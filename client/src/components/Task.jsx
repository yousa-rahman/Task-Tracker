import React, {Fragment, useEffect , useState} from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const Task = () => {

    const [tasks, setTasks] = useState([]);

    useEffect( ()=> {
      axios.get("http://localhost:5000/task").then(res => setTasks(res.data.result))
    },[] );
    
    if(tasks[0]){
      console.log(tasks);
    }

 
    return(
        <Fragment>
        <div className="task-btn ">
            <NavLink to="/addtask" className="btn btn-sm btn-primary">Add Task</NavLink>
        </div>
          {tasks[0] && tasks.map(task => {return <div key={task.id} className="card text-center m-4">
            <div className="card-header"> Tasks</div>
            <div className="card-body">
              <h6 className="card-title">{task.title}</h6>
              <p className="card-text">{task.description}</p>
            </div>
            <div className="card-footer text-muted">Date Crreated</div>
          </div> })} 
      </Fragment>
    );
    
};

export default Task;