import { useStore } from "@nanostores/react";
import { isRoutine } from "../../helpers/isRoutine.js";

const ButtonFood =  () => {

    const $isRoutine = useStore(isRoutine);
    const handleButtonFood = ( ev ) => {
        ev.preventDefault();
        isRoutine.set( false );
        console.log( isRoutine.get() );
    };

    return (
        <li>
            <button
                className={`py-2 px-10 m-0.5 rounded-br-lg bg-[#628A6F] ${ isRoutine.get() ? '' : 'font-bold' } transform-gpu`}
                onClick={handleButtonFood}
            >
                Comida
            </button>
        </li>
    );
}

export default ButtonFood;