import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom';

export const Task = () => {
    return(
        <Fragment>
        <div className="task-btn ">
            <NavLink to="/addtask" className="btn btn-sm btn-primary">Add Task</NavLink>
        </div>
        <div className="card text-center m-4">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="google.com" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
      </Fragment>
    );
    
};

export default Task;