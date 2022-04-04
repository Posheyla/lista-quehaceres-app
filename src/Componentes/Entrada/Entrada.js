import React from 'react';
import './Entrada.css';

const Entrada = (props) => {
    const { lista, setLista } = props;

    let tarea = {
        nombre: "",
        isComplete: false
    };

    const ingresaTarea = e => {
        tarea.nombre = e.target.value;
    }

    const agregaTarea = e => {
        setLista([...lista, tarea]);
    }

    return (
        <div className="containerentrada">
            <h1 className="display-4">To Do List</h1>
            <input
                className="form-control"
                type="text"
                name="tarea"
                onChange={ingresaTarea} />
            <button className="btn btn-primary btn-block mt-2" onClick={agregaTarea}>Add Task</button>
        </div>
    )
}

export default Entrada;