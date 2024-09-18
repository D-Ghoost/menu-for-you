
const OthersDiseases = ({ showInputOther }) => {
    
    return(
        <>
            <div
                className={ `${ showInputOther ? 'block' : 'hidden' } flex flex-col` }
            >
                <label 
                    htmlFor='otherTypeOfDisease'
                    className='my-0.5 font-bold'
                >
                    Especificanos que condicion a las anteriormente mencionadas tienes
                </label>
                <input 
                    id='otherTypeOfDisease'
                    name='otherTypeOfDisease' 
                    className='mt-1 mb-3 px-2 py-3 rounded-md text-[#3C3C3C] '
                    type='text' 
                />
            </div>
        </>
    );
};

export { OthersDiseases }