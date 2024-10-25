import React, { useState } from "react";


//create your first component
const Home = () => {
    let [listaDeTareas, setListaDeTareas] = useState(["bañarse", "limpiar", "cocinar", "aprender react"])
    const [nuevaTarea, setNuevaTarea] = useState("")

    const agregarTarea = (evento) => {
        evento.preventDefault()
        if (nuevaTarea.trim() !== "") {
            setListaDeTareas([...listaDeTareas, nuevaTarea])
            setNuevaTarea("")
        }
    }

    const eventoEnter = (evento) => {
        if (evento.key === "Enter") {
            agregarTarea(evento)
        }
    }

    const borrarTarea = (evento, index) => {
        evento.preventDefault()
        let listaFiltrada = listaDeTareas.filter((task, i) => {
            return (i != index)
        })
        setListaDeTareas(listaFiltrada)
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mt-5">Todos</h1>

            <div className="mx-auto col-6">
                <input type="text"
                    className="form-control"
                    placeholder="¿Que Necesitas Hacer?"
                    value={nuevaTarea}
                    onChange={(evento) => setNuevaTarea(evento.target.value)}
                    onKeyDown={eventoEnter}
                />

                {/* <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-success mt-3 mb-3 w-50"
                        onClick={(evento) => agregarTarea(evento)}>
                        Agregar Tarea
                    </button>
                </div> */}

                <ul className="list-group">
                    {listaDeTareas.map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                {item}  <i className="fa-solid fa-trash icono-oculto float-end fs-4"
                                    onClick={(evento) => borrarTarea(evento, index)}>
                                </i>
                            </li>
                        )
                    })}

                </ul>


            </div>
        </div>

    );
};

export default Home;