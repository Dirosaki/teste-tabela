import React, {useState} from 'react';
import './style.css';
import Line from './components/line/';
import firebase from './config/firebase';

function App() {
  
  const [tabelas, setTabelas] = useState();

  let listaTabelas = [];

  firebase.firestore().collection('eventos').get().then(async (resultado) => {
    await resultado.docs.forEach(doc => {
        
            listaTabelas.push({
                id: doc.id,
                ...doc.data()
            });
        
    });
    setTabelas(tabelas);
});

  return (
    <div className="corpo d-flex flex-column align-items-center">
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
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
