import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Initial from './pages/Initial';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Initial/>
  </React.StrictMode>
);

//FALTA AÑADIR BOOTSTRAP A LOS COMPONENTES.
reportWebVitals();
