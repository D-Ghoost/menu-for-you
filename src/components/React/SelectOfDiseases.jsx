
import { useState } from 'react';
import { OthersDiseases } from './OthersDiseases.jsx';
import listOfDiseases from '../../helpers/listOfDiseases.js';

const SelectOfDiseases = ({ haveFoodRestriction }) => {

    
    // const $showInputOtherDiseases = useStore( showInputOtherDiseases );
    const [selectedValueOfDiseases, setSelectedValueOfDiseases] = useState('none');
    const [showInputOther, setshowInputOther] = useState(false);

    const $optionsOfDiseases = listOfDiseases;

    const onSelectChange = ({ target }) => {
        setSelectedValueOfDiseases( target.value );
        target.value === 'otros'
            ? setshowInputOther( true )
            : setshowInputOther( false )
    }


    return(
        <>
            <div
                className={ `${ haveFoodRestriction ? ' block ' : 'hidden' } flex flex-col` }
            >
                <label 
                    htmlFor='typeOfDisease'
                    className='my-0.5 font-bold'
                >
                    Cuentanos que condiciones de salud tienes?
                </label>
                <select 
                    id='typeOfDisease'
                    name='typeOfDisease'
                    className=' mt-1 mb-3 px-2 py-2 rounded-md text-[#3C3C3C] ' 
                    value={ selectedValueOfDiseases }
                    onChange={ onSelectChange }
                >
                    <option 
                        key='none'
                        value='none'
                        disabled
                    >
                        Seleccione una opcion
                    </option>
                    {
                        $optionsOfDiseases.map((type) => (
                            <option 
                                key={ type.value }
                                value={ type.value }
                            >
                                { type.label }
                            </option>
                        )) 
                    }
                </select>
                <OthersDiseases 
                    showInputOther = { showInputOther }
                />
            </div>
        </>
    );
}


export { SelectOfDiseases }