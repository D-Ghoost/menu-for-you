import { useStore } from "@nanostores/react";
import { responseUser } from "../../helpers/responseUser";
import { isRoutine } from "../../helpers/isRoutine";
import generateMenu from "../../helpers/googleIA";

const ResponseGeneratorMenu = () => {
    
    const $responseUser = useStore( responseUser );
    const $isRoutine = useStore( isRoutine );
    let prompt = '';
    let diseases = '';
    let responseGenerator = '';

    if( Object.keys( $responseUser ).length !== 0 ){
        if( !$responseUser['foodborne-illness'] ){
            diseases = `En adición, tengo una enfermedad llamada ${ $responseUser['type-of-disease'] }, ten en cuenta esto para la creación de la dieta.`;
            if($responseUser['type-of-disease'] !== ''){
                diseases =  `la enfermedad se llama ${ $responseUser['other-type-of-disease'] }, ten en cuenta esto para la creación de la dieta.`;
            };
        };
    
        prompt = `Por favor ayudame a crear una ${ $isRoutine ? 'rutina' : 'comida' } saludable ${ $responseUser['priority'] && 'que priorice ' + $responseUser['priority']  } 
                    y que tengas encuenta que sea ${ !$responseUser['vegetarian'] && 'vegetarian' }, que tengas encuenta que sea ${ !$responseUser['vegan'] && 'vegana' },
                    que tenga los alimentos ${ $responseUser['favorite-foods'] } pero dado el caso que sean menos saludables, que sean en menor cantidad. Además, que no contengan
                    los alimentos ${ $responseUser['non-favorite-foods'] }; Ten encuenta que mi peso es de ${ $responseUser['user-weight'] } en kg y mi altura es de ${ $responseUser['user-height'] }.
                    Por ultimo dame un disclaimer de que la dieta debe ser revisada por un profesional de la salud y que no soy responsable de los resultados de la dieta. ${ diseases }`;
    
        // responseGenerator = await generateMenu( prompt );
        responseGenerator = prompt;
    }

    return(
        <>
            <section id='respuesta-ia'>
                {/* <h2 className={`${ generateMenu ? 'block' : 'hidden' }`}>
                    Muy bien, Emrys prepara tu rutina...
                </h2> */}
                <p>
                    {
                        responseGenerator
                    }
                </p>
            </section>
        </>
    );
};

export default ResponseGeneratorMenu;