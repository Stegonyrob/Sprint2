import React, { useState } from 'react';
import HelpButton from './Incremental 46 formulario/HelpButton/helpButton';
import HelpForm from './Incremental 46 formulario/HelpForm/HelpForm';
import Footer from '../src/Components/Footer';

function App() {
  return (
    <div className="App">
      <h1>¡Bienvenido a Keybook!</h1>
      <HelpButton onClick={handleButtonClick} />
      {showForm && <HelpForm onClose={handleFormClose} />}
      <Footer />
    </div>
  );
}

export default App;
