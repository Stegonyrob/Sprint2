import React, { useState } from 'react';
import HelpForm from '../HelpForm/HelpForm';

function HelpButton() {
    const [showForm, setShowForm] = useState(false); // aquí uso el hook usestate para la visibilidad dle form, en principio no debe tener
    const handleButtonClick = () => {
        setShowForm(!showForm);
    };
    return (
        <div>
            <button onClick={handleButtonClick}>
                {showForm ? "Cerrar formulario" : "Solicitar ayuda"}
            </button>
            {showForm && <HelpForm />}
        </div>
    );
}
export default HelpButton;