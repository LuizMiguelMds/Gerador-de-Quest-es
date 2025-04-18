export defaul function Sidebar() {
    return(
        <aside className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">GeoProvas</h2>
        <nav className="flex flex-col gap-2">
            <button className="text-left hover:bg-gray-200 p-2 rounded">📄 Gerar Provas</button>
            <button className="text-left hover:bg-gray-200 p-2 rounded">📊 Estatísticas</button>
            <button className="text-left hover:bg-gray-200 p-2 rounded">⚙️ Configurações</button>
        </nav>
        </aside>
    );
};