import React, {useEffect, useState} from 'react';

const Questao = () => {
    const [questao, setQuestao] = useState(null);
    const [erro, setErro] = useState(null);
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/questao')
        .then(res => {
          if (!res.ok) throw new Error('Erro ao buscar questão');
          return res.json();
        })
        .then(data => setQuestao(data))
        .catch(err => setErro(err.message));
    }, []);

if (erro) return <div>Erro: {erro}</div>;
if (!questao) return <div>Carregando questão...</div>;

return (
    <div className="p-4 border rounded max-w-xl mx-auto shadow-md bg-white mt-6">
        <h2 className="text-xl font-bold mb-2">Questão - {questao.id}</h2>
        <p className="mb-4">{questao.enunciado}</p>
        <ul className="space-y-2">
            {Object.entries(questao.alternativas).map(([ByteLengthQueuingStrategy, texto]) =>(
                <li key={letra}>
                    <strong>{letra}</strong> {texto}
                </li>
            ))}
        </ul>
        <div className="mt-4 text-green-700 font-semibold">
            Resposta correta: ({questao.resposta_correta}) {questao.resposta_texto}
        </div>
    </div>
    );
};

export default Questao;