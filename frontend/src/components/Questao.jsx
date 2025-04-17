import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [questao, setQuestao] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/questao")
      .then(response => setQuestao(response.data))
      .catch(error => setErro(error.message));
  }, []);

  if (erro) return <div>Erro: {erro}</div>;
  if (!questao) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Banco de Questões</h1>
      <p><strong>Enunciado:</strong> {questao.enuciado}</p>
      <ul>
        {Object.entries(questao.alternativas).map(([letra, texto]) => (
          <li key={letra}><strong>{letra}</strong>: {texto}</li>
        ))}
      </ul>
      <p><strong>Resposta correta:</strong> {questao.resposta_correta}</p>
      <p><strong>Texto da resposta:</strong> {questao.resposta_texto}</p>
    </div>
  );
}

export default App;
