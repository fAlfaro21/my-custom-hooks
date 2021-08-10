//ESTE CUSTOM HOOK REALIZA 3 FUNCIONES: INCREMENTAR, DECREMENTAR Y RESET
//DEVUELVE EL VALOR CALCULADO ASI COMO LAS FUNCIONES PARA SER UTILIZADAS

import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState( initialState ) //10

    // En este caso se utiliza un factor:
    // const increment = ( factor = 1 ) => {

    //     setCounter( counter + factor );

    // }

    const increment = () => {
        setCounter( counter + 1 );
    }

    // En este caso se utiliza un factor:
    // const decrement = ( factor = 1 ) => {

    //     setCounter( counter - factor );

    // }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialState );
    }

    return({
        counter,
        increment,
        reset,
        decrement
    })

}
