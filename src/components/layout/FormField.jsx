import React from 'react'

export const FormField = (params) => {
    return(
        <div className="mb-3">
            <label htmlFor={params.title} className={params.labelClass || "form-label"}>{params.value}</label>
            <input type={params.inputType || "text"} className={params.inputClass || "form-control"} id={params.title} name={params.title}/>
        </div>
    );
};
