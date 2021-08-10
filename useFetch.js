import { useEffect, useRef, useState } from 'react';


export const useFetch = ( url ) => {

    //El useRef se utiliza para controlar la rederizacion cuando el componente esta montado
    const isMounted = useRef(true);
    
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {        
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                //setTimeout(() => {
                    //El uso del isMounted(useRef) es para controlar la rederizacion del componente. Debe renderizarse mientras el
                    //componente aun esta montado, de lo contrario no debe desencadenar una renderizacion
                    if (isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    } else{
                        console.log('Se ha prevenido la llamada del setState cuando el componente aun esta montado')
                    }
                //}, 4000);

            })

            .catch( () => {
                setState ({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            } )

    }, [url])

    return state;
}
