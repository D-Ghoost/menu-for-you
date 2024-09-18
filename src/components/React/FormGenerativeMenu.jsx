import { useStore } from '@nanostores/react';
import { useState, useRef } from 'react';
import { FlavorSelector } from './FlavorSelector.jsx';
import { SelectOfDiseases } from './SelectOfDiseases.jsx';
import { useGetDataForm } from '../../helpers/useGetDataForm.js';
import { informationUser } from '../../helpers/informationUser.js';



export default function FormGenerativeMenu() {
   
    const formRef = useRef( null );
    const [ haveFoodRestriction, setHaveFoodRestriction ] = useState( false );
    const [showAlert, setShowAlert] = useState(false);
    const $informationUser = useStore(informationUser);

    const saveUserData = ( event ) => {
        event.preventDefault();
        const formData = new FormData( formRef.current );
        const data = useGetDataForm( formData, haveFoodRestriction );
        if( data ){
            informationUser.set( data )
            console.log( $informationUser )
            setShowAlert( false );
        }else{
            setShowAlert( true );
        }
    }

    return(
        <>
            <form 
                ref={ formRef }
                className='flex flex-col h-full'
                onSubmit={ saveUserData  }
            >

                <FlavorSelector/>

                <label
                    htmlFor='vegetarian'
                    className='my-3 font-bold'
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
                    className='my-3 font-bold'
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
                    htmlFor='favoriteFoods'
                    className='my-3 font-bold'
                >
                    Cuentanos algunos alimentos que te gusten mucho
                </label>
                <input 
                    id='favoriteFoods'
                    name='favoriteFoods' 
                    className='mt-2 mb-3 px-2 py-3 rounded-md text-[#3C3C3C] invalid:border-rose-500 invalid:text-rose-500 focus:invalid:ring-rose-500 '
                    type='text' 
                     
                />
                <label 
                    htmlFor='notFavoriteFoods'
                    className='my-3 font-bold'
                >
                    Cuentanos algunos alimentos que te NO gusten
                </label>
                <input 
                    id='notFavoriteFoods'
                    name='notFavoriteFoods' 
                    className='mt-2 mb-3 px-2 py-3 rounded-md text-[#3C3C3C] invalid:border-rose-500 invalid:text-rose-500 focus:invalid:ring-rose-500'
                    type='text' 
                     
                />
                <label
                    htmlFor='foodRestriction'
                    className='w-80 my-3 font-bold'
                >
                    Sufres alguna enfermedad que te impida comer ciertos alimentos?
                    <input
                        id='foodRestriction'   
                        name='foodRestriction'
                        className='mx-4'
                        type='checkbox'
                        onChange={ () => setHaveFoodRestriction( !haveFoodRestriction ) }
                    />
                </label>

                <SelectOfDiseases 
                    haveFoodRestriction = { haveFoodRestriction }
                />

                <section 
                    className=' mt-3 flex gap-16'
                >
                    <div className='flex flex-col'>
                        <label 
                            htmlFor='userWeight'
                            className='my-3 font-bold'
                        >
                            Cuentanos cuanto pesas? <span className='italic font-bold'>(Kg)</span>
                        </label>
                        <input 
                            id='userWeight'
                            name='userWeight' 
                            className='w-16 mt-2 mb-3 px-2 py-3 rounded-md text-[#3C3C3C] invalid:border-rose-500 invalid:text-rose-500 focus:invalid:ring-rose-500'
                            pattern='\d+(\.\d{1,2})?'
                            onInvalid={ ({ target }) => target.setCustomValidity('Por favor, ingresa un número válido y maximo dos decimales') }
                            type='text'
                             
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label 
                            htmlFor='userWeight'
                            className='my-3 font-bold'
                        >
                            Cuentanos cuanto mides? <span className='italic font-bold'>(Mts)</span>
                        </label>
                        <input 
                            id='userHeight'
                            name='userHeight' 
                            className='w-16 mt-2 mb-3 px-2 py-3 rounded-md text-[#3C3C3C] invalid:border-rose-500 invalid:text-rose-500 focus:invalid:ring-rose-500'
                            pattern='\d+(\.\d{1,2})?'
                            onInvalid={ ({ target }) => target.setCustomValidity('Por favor, ingresa un número válido y maximo dos decimales') }
                            type='text'
                        />
                    </div>
                </section>
                <div className={ `${ showAlert ? 'block' : 'hidden' }  w-full px-4 py-4 bg-red-500 rounded-md ` }>
                    <p
                        className='text-white font-bold'
                    >
                        Favor llenar todos los campos de texto o listado vacios
                    </p>
                </div>
                <button 
                    className='m-3 p-2 w-32 justify-center self-center bg-[#628A6F] rounded-md text-white font-bold '
                >
                    Generar
                </button>
            </form>
        </>
    );

}   