import { useRef } from "react";

const Busqueda = () => {

    const cajaBusqueda = useRef(null);
    const parrafoValor = useRef(null);

    const handleBuscar = () => {
        parrafoValor.current.textContent = cajaBusqueda.current.value;
    }
    return (
        <div>
            <div className="busqueda">
                <input ref={cajaBusqueda} type="text" className="cajaBusqueda" onChange={(e) => setValorABuscar(e.target.value)} />
                <button className="botonBuscar" onClick={handleBuscar}>Buscar</button>
            </div>
        </div>
    )
}

export default Busqueda;