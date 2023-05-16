import React, { useState } from 'react';

function HelpForm(props) {
    //los state crean estas dos variables de estado y ahí se guardan los valores de los campos de texto
    const [user, setUser] = useState('');
    const [problem, setProblem] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // en teoria por aquí podmeos mandar los datos del placeholder a los admin
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Usuario con problemas:
                <input type="text" value={user} onChange={e => setUser(e.target.value)} />
            </label>
            <br />
            <label>
                Problema a resolver:
                {/* al utilizar onChange={e => setUser(e.target.value)}, lo que hace es actualizar el estado de user cada vez que el usuario ingresa un nuevo valor en el campo de entrada del usuario */}
                <textarea placeholder="Escribe aquí tu problema" value={problem} onChange={e => setProblem(e.target.value)} />
            </label>
            <br />
            <button type="submit">Enviar solicitud de ayuda</button>
        </form>
    );
}
export default HelpForm;