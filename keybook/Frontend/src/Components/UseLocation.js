import React from "react";
import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  console.log(location.state.name);
  return <h2>...</h2>;
}
