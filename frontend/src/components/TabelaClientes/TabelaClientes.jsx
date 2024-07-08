import { useState, useEffect } from 'react';
import axios from 'axios' ;


import styles from './TabelaClientes.module.css';


const TabelaClientes = () => {
  return (
    <>
      <h1>Clientes</h1>
    </>
  )
}

export default TabelaClientes;



/*

const Tabela = () => {

  const usuarios = [
    { nome: 'João', email:'joao@example.com', numero: '(11) 2120-5678'},
    { nome: 'Maria', email:'maria@example.com', numero: '(11) 3344-5678'},
    { nome: 'Carlos', email:'carlos@example.com', numero: '(65) 5555-5678'}
  ];

  return (
    <div className="container">
      <h1>Tabela Estilizada em React</h1>
        <table className="table">
          <thead>
              <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.numero}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Tabela;


*/