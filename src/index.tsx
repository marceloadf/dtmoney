import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api';
   
    this.get('/transactions', () => {
      return [
        {
          title: 'Desenvolvimento de Site',
          category: 'Venda',
          price: 120000,
          createdAt: new Date()
        }
      ];
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);