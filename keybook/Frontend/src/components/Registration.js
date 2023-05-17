import React, { useState } from 'react';

function Register() {

    const [name, setName] = useState("")
    const [heading, setHeading] = useState("")
    

    function handleChange(e) {
        setName(e.target.value)
        console.log(e.target.value)
    }

    function handleClick(e){      
        
        setHeading(name)
        e.preventDefault()
    }


    return (
        <form onClick={handleClick}
            className="p-3 mb-5 default-card"
            id="form-register"
            action="/register"
            method="POST"
        >
        <h1>Hello {heading}</h1>

            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="form-group">
                        <label for="name">Nombre</label>
                        <input onChange={handleChange} value={name} type="text" className="form-control" id="name" required />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="form-group">
                        <label for="lastName">Apellidos</label>
                        <input type="text" className="form-control" id="lastName" required />
                    </div>
                </div>
            </div>

            <div className="row justify-content-center" id="register-form-buttons">
                <div className="col-md-11">
                    <button 
                        type="submit"
                        className="btn btn-warning btn-block"
                        id="register-send"
                    >
                        Enviar
                    </button>
                    <button type="reset" className="btn btn-outline-warning btn-block">
                        Restablecer
                    </button>
                </div>
            </div>
        </form>
    );
}


export default Register;