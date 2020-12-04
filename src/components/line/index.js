import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import firebase from '../../config/firebase';
import './line.css';

function Line() {
    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();
    const [estadoCivil, setEstadoCivil] = useState();
    const [cpf, setCpf] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();

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

    return (
        <tr>
            
            <td><input onChange={(e) => setNome(e.target.value)} className='form-control' type='text' placeholder='Diego' /></td>
            <td><input onChange={(e) => setIdade(e.target.value)} className='form-control' type='number' placeholder='24' /></td>
            <td>
                <select onChange={(e) => setEstadoCivil(e.target.value)} className="form-control">
                    <option disabled selected>Selecione</option>
                    <option>Solteiro</option>
                    <option>Casado</option>
                    <option>Separado</option>
                    <option>Divorciado</option>
                    <option>Viúvo</option>
                </select>
            </td>
            <td><input onChange={(e) => setCpf(e.target.value)}className='form-control' type='number' placeholder='999.999.999-99'/></td>
            <td><input onChange={(e) => setCidade(e.target.value)} className='form-control' type='text' placeholder='São Paulo' /></td>
            <td>
                <select onChange={(e) => setEstado(e.target.value)} className='form-control' id="estado" name="estado">
                    <option disabled selected>UF</option>
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
                    <option>PR</option>
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
                <button onClick={save} type='button' className='btn btn-dark mr-1'>Salvar</button>
                <button disabled type='button' className='btn btn-danger ml-1'>Excluir</button>
            </th>
        </tr>
    );
}

export default Line;