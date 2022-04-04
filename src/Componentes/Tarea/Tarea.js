import React from 'react';
import './Tarea.css';

const Tarea = (props) => {
    const { tarea, index, setLista, lista } = props;

    const borrarTarea = () => {
        setLista(() => {
            return lista.filter(tarea => lista.indexOf(tarea) !== index)
        })
    }

    const completarTarea = () => {
        lista[index].isComplete = !lista[index].isComplete;
        setLista([...lista]);
    }

    return (
        <div className="container">
            {tarea.isComplete ?
                <h4 className="isComplete">{tarea.nombre}</h4> :
                <h4 className="notComplete">{tarea.nombre}</h4>}
                
            <input type="checkbox" onChange={completarTarea} checked={tarea.isComplete} />
            <button className="btn btn-danger btn-xs" onClick={borrarTarea}>Delete</button>
        </div>
    )
}

export default Tarea;