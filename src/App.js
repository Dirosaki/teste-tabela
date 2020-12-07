import React, { useState, useEffect } from 'react';
import './style.css';
import Line from './components/line/';
import firebase from './config/firebase';

function App() {

  const [tabelas, setTabelas] = useState([]);

  let listaTabelas = [];

  useEffect(() => {
    firebase.firestore().collection('tabela').get().then(async (resultado) => {
      await resultado.docs.forEach(doc => {
        listaTabelas.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setTabelas(listaTabelas);
    });
  });

  return (
    <div className="corpo d-flex flex-column align-items-center pb-5">
      <img className='m-3' src="https://softwrap.com.br/img/logo/logo-softwrap-branco.png" alt="Logo Softwrap" />
      <div className='tabela-contain m-auto rounded position-relative'>
        <table className="table table-hover tabela">
          <thead>
            <tr>
              <th scope="col">Nome:</th>
              <th scope="col">Idade:</th>
              <th scope="col">Estado Civil:</th>
              <th scope="col">CPF:</th>
              <th scope="col">Cidade:</th>
              <th scope="col">Estado:</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <Line />
            {tabelas.map(item => <Line key={item.id} id={item.id} name={item.nome} age={item.idade} estdCivil={item.estadoCivil} cpfNumber={item.cpf} city={item.cidade} estadoName={item.estado} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
