import React from "react";
import Sidebar from './components/Sidebar';
import Questao from "./components/Questao";

function App() {
  return(
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2x1 font-bold text-gray-800 mb-6">
          Banco de Questões <span className="text-blue-600">Geografia</span>
        </h1>
        <Questao />
      </main>
    </div>
  );
}

export default App
