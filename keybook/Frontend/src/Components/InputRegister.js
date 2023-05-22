import React from 'react';

export const InputRegister = ({ label, type, id, name, onChange, value }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input
                    value={value}
                     onChange={onChange}
                        name={name}
                        id={id}
                        type={type}
                        className="form-control "
                        required
                    />
                </div>
            </div>
        </div>
    )
}

