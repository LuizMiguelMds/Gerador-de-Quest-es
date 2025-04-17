import React from "react";
import Questao from "./components/Questao";

function App() {
  return(
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Banco de Questões</h1>
      <Questao />
    </div>
  );
}

export default App
