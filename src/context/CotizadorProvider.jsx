import { createContext, useState } from 'react';
import { calcularMarca, obtenerDiferenciaYear, calcularPlan, formatearDinero } from '../helpers/index'

//llamar a context
const CotizadorContext = createContext();

//provider, de donde nace, de donde vienen la fuente de los datos
//children son los componentes hijos.
const CotizadorProvider  = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        //una base
        let resultado = 2000
        //obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);
        //hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado / 100);
        //americano 15%, europeo 30%, asiatico 5%
        resultado *= calcularMarca(datos.marca);
        //Básico 20%, Completo 50%
        resultado *= calcularPlan(datos.plan);
        //Formatear dinero
        resultado = formatearDinero(resultado);
        setResultado(resultado);
    }
   

    
    return(
        <CotizadorContext.Provider
        value={{
          datos,
          handleChangeDatos,
          error,
          setError,
          cotizarSeguro,
          resultado,
          cargando
        }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext;
