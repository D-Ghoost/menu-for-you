import { useStore } from "@nanostores/react";
import { isRoutine } from "../helpers/isRoutine.js";

export default function ButtonTypeMenu({ name }) {
    const $isRoutine = useStore(isRoutine);

    const handleButtonTypeMenu = (ev) => {
        ev.preventDefault();
        console.log('Estas pulsando un boton :D');
        if( !$isRoutine && name === 'Rutina' ) {
            isRoutine.set( true );
        }
        if( $isRoutine && name === 'Comida' ){
            isRoutine.set( false );
        }

        console.log( `$isRoutine = ${ isRoutine.get() }` );
    };

    return (
        <li>
            <button 
                className={`py-2 px-10 m-0.5 ${name === 'Rutina' ? 'rounded-tl-lg' : 'rounded-br-lg'} bg-[#628A6F] transform-gpu`}
                onClick={handleButtonTypeMenu}
            >
                {name}
            </button>
        </li>
    );
}