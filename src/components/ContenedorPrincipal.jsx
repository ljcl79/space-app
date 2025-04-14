import React from 'react'
import BarraLateral from './BarraLateral'
import Galeria from './Galeria'

const ContenedorPrincipal = ({ fraseAplicacion }) => {
    return (
        <div className="mainContainer">
            <BarraLateral></BarraLateral>
            <Galeria fraseAplicacion={fraseAplicacion}></Galeria>
        </div>
    )
}

export default ContenedorPrincipal