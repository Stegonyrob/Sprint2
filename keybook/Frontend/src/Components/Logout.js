import React from "react";

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("userId");
    alert("Ha cerrado sesión. Volviendo a página de inicio");
    window.location.href = "formLogin.html";
  };

  return <button onClick={logout}>Logout</button>;
};
export default Logout;
