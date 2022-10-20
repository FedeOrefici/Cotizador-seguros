import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const Error = () => {

    const { error } = useContext(CotizadorContext);


    return(
        <p className="border text-center border-red-400 bg-red-100 py-3 text-red-700">
            {error}
        </p>
    )

}

export default Error;