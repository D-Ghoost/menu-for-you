import { useStore } from "@nanostores/react";
import { informationUser } from "../../helpers/informationUser";
import { useFetch } from "../../helpers/useFetch";
import { useCallback } from "react";


const ResponseGeneratorMenu = () => {

    const $informationUser = useStore( informationUser );

    if( Object.keys( $informationUser ).length !== 0 ){
        const data = useFetch( $informationUser );
    }
    
    return(
        <>
            <section 
                id='respuesta-ia'
                // className={ data.showResponse ? 'block' : 'hidden' }
            >
                <p>
                    observa consola
                </p>
            </section>
        </>
    );
};

export default ResponseGeneratorMenu;