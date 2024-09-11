import { useStore } from "@nanostores/react";
import { useState } from "react";
import { isRoutine } from "../../helpers/isRoutine.js";

export default function ButtonTypeMenu({ name }) {
    const $isRoutine = useStore(isRoutine);
    const [ isPressed, setIsPressed ] = useState('');

    const handleButtonTypeMenu = (ev) => {
        ev.preventDefault();
        console.log('Estas pulsando un boton :D');
        if( !$isRoutine && name === 'Rutina' ) {
            isRoutine.set( true );
            setIsPressed( isRoutine.get() ? 'font-bold' : 'font-medium' );
        }
        if( $isRoutine && name === 'Comida' ){
            isRoutine.set( false );
            setIsPressed( isRoutine.get() ? 'font-medium' :'font-bold' );
        }

        console.log( `$isRoutine = ${ isRoutine.get() }` );
        console.log( `isPressed = ${ isPressed }` );
    };

    return (
        <li>
            <button 
                className={`py-2 px-10 m-0.5 ${name === 'Rutina' ? 'rounded-tl-lg' : 'rounded-br-lg'} ${ isPressed } bg-[#628A6F]  transform-gpu`}
                onClick={handleButtonTypeMenu}
            >
                {name}
            </button>
        </li>
    );
}