import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loja from './componentes/Loja';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Loja nome="Facisa Store"/>, document.getElementById('root'));

// Se for user serviceworker, troca por .register
serviceWorker.unregister();