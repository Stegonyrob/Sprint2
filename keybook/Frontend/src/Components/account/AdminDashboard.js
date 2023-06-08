import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Workbook } from "xlsx";

const DEFAULT_PAGE = 1;
const ROWS_PER_PAGE = 10;
const XLSX_MIME_TYPE = "application/vnd.ms-excel";
const XLSX_FILE_NAME = "Users_List.xls";

const createWorkbook = (users) => {
  const wb = new Workbook();
  const ws = wb.addWorksheet("Users List");
  ws.addRow(["ID", "Name", "First Name", "Last Name", "Email", "Role"]);

  users.forEach((user) => {
    ws.addRow([
      user.id,
      user.name,
      user.firstName,
      user.lastName,
      user.email,
      user.role,
    ]);
  });

  return wb;
};

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(1);
  const history = useHistory();
  const { page } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`/api/users?page=${currentPage}`);
      const usersData = await response.json();
      setUsers(usersData);
      setTotalPages(usersData.totalPages);
    };

    fetchUsers();
  }, [currentPage]);

  const handlePrintExcel = () => {
    const wb = createWorkbook(users);
    const blob = new Blob([wb], { type: XLSX_MIME_TYPE });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = XLSX_FILE_NAME;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleFirstPage = () => {
    history.push("/admin/users/1");
  };

  const handlePreviousPage = () => {
    history.push(`/admin/users/${currentPage - 1}`);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLastPage = () => {
    history.push(`/admin/users/${totalPages}`);
  };

  const renderTableRows = () => {
    return users
      .slice((currentPage - 1) * ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE)
      .map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
        </tr>
      ));
  };

  return (
    <div>
      <h1>Listado de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div>
        <button onClick={handleFirstPage}>First</button>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === DEFAULT_PAGE}
        >
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={handleLastPage} disabled={currentPage === totalPages}>
          Last
        </button>
        <button onClick={handlePrintExcel}>Imprimir listado</button>
      </div>
    </div>
  );
}
