import React from 'react';

const Sidebar = () => (
  <aside className="w-56 bg-white shadow-sm p-4 border-r">
    <h2 className="text-xl font-bold mb-6 text-gray-700">
      <span className="text-blue-500">Geo</span>Provas
    </h2>
    
    <nav className="space-y-2">
      <button className="sidebar-btn">
        🏠 Início
      </button>
      <button className="sidebar-btn">
        📚 Questões
      </button>
      <button className="sidebar-btn">
        📊 Relatórios
      </button>
    </nav>
  </aside>
);

export default Sidebar;