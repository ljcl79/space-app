import React, { useState } from 'react'
import ItemMenu from './ItemMenu'

const BarraLateral = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

    const opcionesMenu = [
        "Inicio",
        "Más vistas",
        "Favoritas",
        "Nuevas",
        "Sorprendeme",
        "Quienes somos"
    ];


    return (
        <aside>
            <nav>
                <ul className="listaMenu">
                    {opcionesMenu.map((opcion, posicion) => {
                        const seleccionada = opcion === opcionSeleccionada;
                        return <ItemMenu
                            key={posicion}
                            textoMenu={opcion}
                            seleccionada={seleccionada}
                            seleccionarOpcion={setOpcionSeleccionada}
                        ></ItemMenu>
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default BarraLateral