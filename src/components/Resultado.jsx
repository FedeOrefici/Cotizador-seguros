import useCotizador from "../hooks/UseCotizador";
import { MARCAS, PLANES } from "../constants";
import { useCallback, useRef } from "react";

const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos;
    const yearRef = useRef(year)

    const [nombreMarca] = useCallback(
        MARCAS.filter(m => m.id === Number(marca)
    ), [resultado])

    const [nombrePlan] = useCallback(
        PLANES.filter(p => p.id === Number(plan)
        ), [resultado])

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-bold text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca.nombre}        
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {nombrePlan.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año del Auto: </span>
                {yearRef.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado