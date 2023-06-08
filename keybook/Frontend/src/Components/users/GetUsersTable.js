import React from "react";
import { Modal, Button } from "reactstrap";
import XLSX from "xlsx";

function getUsersTable() {
  // Code to retrieve list of users from database
  // ...

  const worksheet = XLSX.utils.json_to_sheet(users);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo Electrónico</th>
          <th>Contraseña</th>
          <th>Fecha de Nacimiento</th>
          <th>Foto de Perfil</th>
          <th>Ciudad</th>
          <th>País</th>
          <th>Teléfono</th>
          <th>Herramientas</th>
          <th>Estudios</th>
          <th>Lenguaje</th>
          <th>Pasatiempo</th>
          <th>LinkedIn</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

<Modal isOpen={isModalOpen}>
  {getUsersTable()}
  <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
  <button>Exportar a Excel</button>
</Modal>;
