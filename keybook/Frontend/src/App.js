import React, { useState } from 'react';
import HelpButton from './Incremental 46 formulario/HelpButton/helpButton';
import HelpForm from './Incremental 46 formulario/HelpForm/HelpForm';
import Footer from '../src/Components/Footer';
import UsersGrid from './Components/UsersGrid';

function App() {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleFormClose = () => {
    setShowForm(false);
  };
  return (
    <div className="App">
      <h1>¡Bienvenido a Keybook!</h1>
      <HelpButton onClick={handleButtonClick} />
      {showForm && <HelpForm onClose={handleFormClose} />}
      <UsersGrid />
      <Footer />
    </div>
  );
}

export default App;
