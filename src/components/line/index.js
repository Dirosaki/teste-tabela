import React, { useState } from 'react';
import firebase from '../../config/firebase';
import './line.css';

function Line({ id, name, age, estdCivil, cpfNumber, city, estadoName }) {
    // console.log(id)
    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();
    const [estadoCivil, setEstadoCivil] = useState();
    const [cpf, setCpf] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [editar, setEditar] = useState(0);

    const db = firebase.firestore();

    function save() {
        db.collection('tabela').add({
            nome: nome,
            idade: idade,
            estadoCivil: estadoCivil,
            cpf: cpf,
            cidade: cidade,
            estado: estado
        }).then(() => {
            alert('sucesso');
        }).catch(erro => {
            alert(erro);
        });
    }
    function excluir() {
        firebase.firestore().collection('tabela').doc(id).delete().then(() => {
            alert(id);
        });
    }

    function edit(){
        setEditar(1);
    }

    return (
        <tr>
            {
                id != undefined 
                    ? 
                    <>
                        <td><input onChange={(e) => setNome(e.target.value)} className='form-control' type='text' disabled placeholder='Nome' value={name} /></td>
                        <td><input onChange={(e) => setIdade(e.target.value)} className='form-control' type='number' disabled placeholder='24' value={age} /></td>
                        <td>
                            <select onChange={(e) => setEstadoCivil(e.target.value)} disabled className="form-control" value={estdCivil} >
                                <option disabled selected hidden >Selecione</option>
                                <option>Solteiro</option>
                                <option>Casado</option>
                                <option>Separado</option>
                                <option>Divorciado</option>
                                <option>Viúvo</option>
                            </select>
                        </td>
                        <td><input onChange={(e) => setCpf(e.target.value)} className='form-control' type='number' disabled placeholder='999.999.999-99' value={cpfNumber} /></td>
                        <td><input onChange={(e) => setCidade(e.target.value)} disabled className='form-control' type='text' placeholder='São Paulo' value={city} /></td>
                        <td>
                            <select onChange={(e) => setEstado(e.target.value)} disabled className='form-control' value={estadoName}>
                                <option disabled selected hidden>UF</option>
                                <option>SP</option>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                            </select>
                        </td>
                        <th>
                            <button onClick={edit} disabled type='button' className='btn btn-warning mr-1 '>Editar</button>
                            <button onClick={excluir} type='button' className='btn btn-danger ml-1 text-black'>Excluir</button>
                        </th>
                    </>
                    :
                    <>
                        <td><input onChange={(e) => setNome(e.target.value)} className='form-control border-success' type='text' placeholder='Nome' value={name} /></td>
                        <td><input onChange={(e) => setIdade(e.target.value)} className='form-control border-success' type='number' placeholder='Idade' value={age} /></td>
                        <td>
                            <select onChange={(e) => setEstadoCivil(e.target.value)} className="form-control border-success" value={estdCivil} >
                                <option disabled selected hidden >Selecione</option>
                                <option>Solteiro</option>
                                <option>Casado</option>
                                <option>Separado</option>
                                <option>Divorciado</option>
                                <option>Viúvo</option>
                            </select>
                        </td>
                        <td><input onChange={(e) => setCpf(e.target.value)} className='form-control border-success cpf-mask' id="input_cpf" type='number' placeholder='000.000.000-00' value={cpfNumber} /></td>
                        <td><input onChange={(e) => setCidade(e.target.value)} className='form-control border-success' type='text' placeholder='Cidade' value={city} /></td>
                        <td>
                            <select onChange={(e) => setEstado(e.target.value)} className='form-control border-success' value={estadoName}>
                                <option disabled selected hidden>UF</option>
                                <option>SP</option>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                            </select>
                        </td>
                        <th>
                            <button onClick={save} type='button' className='btn btn-success btn-block mr-1'>Salvar</button>
                        </th>
                    </>
            }
        </tr>
    );
}

export default Line;