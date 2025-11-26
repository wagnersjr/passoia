import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Looks from "./components/looks/Looks.jsx";
import Lancamentos from "./components/lancamentos/Lancamentos.jsx";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Looks />
      <Lancamentos />
      
    </>
  );
}

export default App;
