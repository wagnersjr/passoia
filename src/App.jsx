import { useState } from "react";
import Header from "./components/Header/header.jsx";
import Main from "./components/Main/main.jsx";
import Looks from "./components/Looks/looks.jsx";
import Lancamentos from "./components/Lancamentos/lancamentos.jsx";
import Novidades from "./components/Novidades/novidades.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Looks />
      <Lancamentos />
      <Novidades/>
      <Footer/>
      
    </>
  );
}

export default App;
