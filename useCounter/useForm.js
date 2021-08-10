//ESTE CUSTOM HOOK HACE LA LECTURA DE LOS VALORES QUE RECIBE UNA CAJA DE TEXTO
//DEVUELVE LOS VALORES JUNTO CON LA FUNCION "HANDLEINPUTCHANGE"

import { useState } from "react"

//initialState seria igual a un objeto con name, email y password
export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues( initialState );
    };


    const handleInputChange = ( {target} ) => {

        setValues({

            ...values,
            [target.name]: target.value

        })

    }

    //Devuelve los valores junto con la funcion handleInputChange (este ultimo para poder hacer cambios)
    return [ values, handleInputChange, reset ]
}
