import { useState } from "react";

const FlavorSelector = () => {
    const [ selectedFlavor, setSelectedFlavor ] = useState('none');
    
    const handleChangeFlavor = (ev) => {
        setSelectedFlavor( ev.target.value );
    };

    return (
        <>
            <label 
                htmlFor='priority'
                className='my-3 font-bold'
            >
                Quieres que priorice lo dulce o lo salado?
            </label>
            <select 
                id='priority'
                name='priority' 
                value={ selectedFlavor }
                onChange={ handleChangeFlavor }
                className='mt-2 mb-3 px-2 py-2 rounded-md text-[#3C3C3C]  '
            >
                <option value='none' disabled >Seleccione una opcion</option>
                <option value='sweet'>Dulce</option>
                <option value='salty'>Salado</option>
            </select>
        </>
    );
}

export { FlavorSelector };