import { useStore } from "@nanostores/react";
import { isRoutine } from "../../helpers/isRoutine.js";

const ButtonRoutine =  () => {

    const $isRoutine = useStore(isRoutine);
    const handleButtonRoutine = ( ev ) => {
        ev.preventDefault();
        isRoutine.set( true );
        console.log( isRoutine.get() );
    };

    return (
        <li>
            <button
                className={`py-2 px-10 m-0.5 rounded-tl-lg bg-[#628A6F] ${ isRoutine.get() ? 'font-bold' : '' } transform-gpu`}
                onClick={handleButtonRoutine}
            >
                Rutina
            </button>
        </li>
    );
}

export default ButtonRoutine;