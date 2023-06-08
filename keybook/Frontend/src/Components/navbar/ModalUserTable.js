import React from "react";
import "../../App.css";
import XLSX from "xlsx";

const Modal = ({ isOpen, closeModal, children, users }) => {
  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");
    XLSX.writeFile(workbook, "usuarios.xlsx");
  };

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal">
            <div className="modal__header">
              <h2>Usuarios</h2>
              <button className="close-button" onClick={closeModal}>
                <span>X</span>
              </button>
            </div>
            <div className="modal__main">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ID de usuario</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Contraseña</th>
                    <th>Fecha de nacimiento</th>
                    <th>Perfil de usuario</th>
                    <th>Ciudad</th>
                    <th>País</th>
                    <th>Teléfono</th>
                    <th>Herramientas</th>
                    <th>Cursos de estudios</th>
                    <th>Idioma</th>
                    <th>Hobby</th>
                    <th>LinkedIn</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>ID: {result.id}</td>
                      <td>ID de usuario: {result.idDelUsuario}</td>
                      <td>Nombre: {result.nombre}</td>
                      <td>Apellido: {result.apellido}</td>
                      <td>Email: {result.email}</td>
                      <td>Password: {result.password}</td>
                      <td>Fecha de nacimiento: {result.dateOfBirth}</td>
                      <td>Perfil de usuario: {result.profilePicture}</td>
                      <td>Ciudad: {result.city}</td>
                      <td>País: {result.country}</td>
                      <td>Teléfono: {result.phone}</td>
                      <td>Herramientas: {result.toolsName}</td>
                      <td>Estudios: {result.studiesCourse}</td>
                      <td>Cursos: {result.languageName}</td>
                      <td>Hobby: {result.hobbyName}</td>
                      <td>LinkedIn: {result.linkedin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleExportExcel}>Exportar a Excel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
