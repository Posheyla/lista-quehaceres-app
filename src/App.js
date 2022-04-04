import React, { useState } from 'react';
import Entrada from './Componentes/Entrada/Entrada';
import Tarea from './Componentes/Tarea/Tarea';
import './App.css';

function App() {
  const [lista, setLista] = useState([]);

  return (
    <div>
      <div className="App container">
        <Entrada lista={lista} setLista={setLista} />
      </div>
      <div className="containertareas">
        {lista.map((tarea, index) => (
          <Tarea tarea={tarea} index={index} setLista={setLista} lista={lista} />
        ))}
      </div>
    </div>
  );
}

export default App;
