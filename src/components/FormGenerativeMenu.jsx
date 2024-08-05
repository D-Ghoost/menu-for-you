import { useStore } from '@nanostores/react';
import { isRoutine } from '../helpers/isRoutine.js';
import listOfDiseases from '../helpers/listOfDiseases.js';


export default function FormGenerativeMenu() {
    const $isRoutine = useStore(isRoutine);
    const $optionsOfDiets = listOfDiseases;
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log('Bienvenido al form :D');
    };
    
    return(
        <>
            <form 
                className='flex flex-col'
                onSubmit={ onSubmit }
            >
                <label 
                    htmlFor='priority'
                    className='my-0.5 font-bold'
                >
                    Quieres que priorice lo dulce o lo salado?
                </label>
                <select 
                    id='priority'
                    name='priority' 
                    className='mt-1 mb-3 px-2 py-2 rounded-md text-[#3C3C3C]  '
                >
                    <option value='sweet'>Dulce</option>
                    <option value='salty'>Salado</option>
                </select>
                <label
                    htmlFor='vegetarian'
                    className='my-0.5 font-bold'
                >
                    Eres vegetariano?
                    <input
                        id='vegetarian'   
                        name='vegetarian'
                        className='mx-4'
                        type='checkbox'
                    />
                </label>
                <label 
                    htmlFor='vegan'
                    className='my-0.5 font-bold'
                >
                    Eres vegano?
                    <input
                        id='vegan'
                        name='vegan'
                        className='mx-4'
                        type='checkbox'
                    />
                </label>
                <label 
                    htmlFor='favorite-foods'
                    className='my-0.5 font-bold'
                >
                    Cuentanos algunos alimentos que te gusten mucho
                </label>
                <input 
                    id='favorite-foods'
                    name='favorite-foods' 
                    className='mt-1 mb-3 px-2 py-3 rounded-md text-[#3C3C3C] '
                    type='text' 
                />
                <label 
                    htmlFor='non-favorite-foods'
                    className='my-0.5 font-bold'
                >
                    Cuentanos algunos alimentos que te NO gusten
                </label>
                <input 
                    id='non-favorite-foods'
                    name='non-favorite-foods' 
                    className='mt-1 mb-3 px-2 py-3 rounded-md text-[#3C3C3C] '
                    type='text' 
                />
                <label
                    htmlFor='foodborne-illness'
                    className='my-0.5 font-bold'
                >
                    Sufres alguna enfermedad que te impida comer ciertos alimentos?
                    <input
                        id='foodborne-illness'   
                        name='foodborne-illness'
                        className='mx-4'
                        type='checkbox'
                    />
                </label>
                <label 
                    htmlFor='type-of-disease'
                    className='my-0.5 font-bold'
                >
                    Cuentanos que condiciones de salud tienes?
                </label>
                <select 
                    id='type-of-disease'
                    name='type-of-disease'
                    className='mt-1 mb-3 px-2 py-2 rounded-md text-[#3C3C3C] ' 
                >
                    {
                        $optionsOfDiets.map((type) => (
                            <option 
                                key={ type.value }
                                value={ type.value }
                            >
                                { type.label }
                            </option>
                        )) 
                    }
                </select>
                <label 
                    htmlFor='other-type-of-disease'
                    className='my-0.5 font-bold'
                >
                    Especificanos que condicion a las anteriormente mencionadas tienes
                </label>
                <input 
                    id='other-type-of-disease'
                    name='other-type-of-disease' 
                    className='mt-1 mb-3 px-2 py-3 rounded-md text-[#3C3C3C] '
                    type='text' 
                />
                <button 
                    className='m-3 p-2 w-32 justify-center self-center bg-[#628A6F] rounded-md text-white font-bold '
                    type='submit'
                >
                    Generar
                </button>
            </form>
        </>
    );

}   