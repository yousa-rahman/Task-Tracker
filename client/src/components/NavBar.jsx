import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink to="/task" className="nav-item">
                                <span className="nav-link active" aria-current="page">Task</span>
                            </NavLink>
                            <NavLink to="/register" className="nav-item">
                                <span className="nav-link active" aria-current="page">Register</span>
                            </NavLink>
                            <NavLink to="/signin" className="nav-item">
                                <span className="nav-link active" aria-current="page">Sign In</span>
                            </NavLink>
                            <NavLink to="/logout" className="nav-item">
                                <span className="nav-link active" aria-current="page">Log Out</span>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
    
};
