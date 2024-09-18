import { vertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const generateMenu = async ( prompt ) =>{

    if ( prompt === '' ) {
        return null;
    }

    const text =  'Bienvenido al generateMenu :D';


    // const { text } = await generateText({
    //     model: vertex('gemini-1.5-pro'),
    //     prompt: prompt
    // })

    console.log( text );
    return text

};

export default generateMenu;
