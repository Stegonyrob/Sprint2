async function getUser() {
  // de momento anulado por que no consigo logearme, el valor del ID de usuario del LocalStorage
  // const userId = localStorage.getItem("userId");

  // uso de meomnto un ID de usuario fijo en el LocalStorage
  localStorage.setItem("userId", 123);

  // Devolver el valor del ID de usuario
  return 3;
}

export default getUser;
