import React from 'react'

export const FormField = (props) => {
    return(
        <div className="mb-3">
            <label htmlFor={props.title} className={props.labelClass || "form-label"}>{props.display}</label>
            <input type={props.inputType || "text"} className={props.inputClass || "form-control"} value={props.value} id={props.title} name={props.title} onChange={e => props.onChange(e)} required/>
        </div>
    );
};
