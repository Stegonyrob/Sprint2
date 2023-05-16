import React, { useState } from 'react';
import HelpButton from './HelpButton/helpButton';
import HelpForm from './HelpForm/HelpForm';

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
      <h1>¡Bienvenido a mi red social!</h1>
      <HelpButton onClick={handleButtonClick} />
      {showForm && <HelpForm onClose={handleFormClose} />}
    </div>
  );
}
export default App;
