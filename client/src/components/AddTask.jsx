import React, { Component } from 'react'
import { FormField } from './layout/FormField';

class AddTask extends Component{
    render() {
        return (
            <div className="container">
                <form action="" method="post">
                    <FormField title="title" value="Title"/>
                    
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea type="text" className="form-control" id="description" name="description" rows="4" columns="5"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Asignee" className="form-label">Asignee</label>
                        <select type="text" className="form-select" id="Asignee" name="Asignee">
                            <option value=""></option>
                            <option value="user">User</option>
                            <option value="user1">User 1</option>
                            <option value="user2">User 2</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default AddTask;
