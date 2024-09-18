import { GoogleGenerativeAI } from "@google/generative-ai";
import { useCallback, useEffect, useState } from 'react';


export const useFetch = ( $informationUser ) => {

    const [menu, setMenu] = useState({
        response: null,
        isLoading: true
    });

    const templatePrompt = {
        generalPrompt: 'Hola, soy una persona con un peso [PESO] kg y una altura de [ALTURA] mts, quiero que me crees un menu saludable pero ten encuenta lo siguiente: Me gustaria que al menos un alimento del menu tenga [FAVORITO], No me gusta el alimento o que contengan [UNFAVORITO], Preferiblemente que el menu priorice el sabor [SABOR]. Recuerda que cualquier otra respuesta que no sea con respecto a la creacion de un menu saludable responde con un mensaje de error comentando que no puedes realizar el menu. ',
        isVegetarian: 'Ademas, ten en cuenta que soy vegetariano. ',
        isVegan: 'En adición, ten en cuenta que soy vegano. ',
        haveCondition: 'Por ultimo tengo una condicion medica que se llama [CONDICION] por lo tanto tenlo en cuenta cuando generes el menu porfavor. '
    };
 
    useEffect(() => {
        generateMenu( $informationUser );
    }, [ menu ]);

    const generateMenu = async ( dataUser ) => {

        if( !dataUser ){
            setMenu({
                response: null,
                showResponse: false
            });
            return menu;
        }
        const genAI = new GoogleGenerativeAI(import.meta.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        let prompt = templatePrompt.generalPrompt
                    .replace('[PESO]', dataUser.userWeight)
                    .replace('[ALTURA]', dataUser.userHeight)
                    .replace('[FAVORITO]', dataUser.favoriteFoods)
                    .replace('[UNFAVORITO]',dataUser.notFavoriteFoods)
                    .replace('[SABOR]',dataUser.priority);

        if( dataUser.vegetarian ){
            prompt += templatePrompt.isVegetarian;
        }

        if( dataUser.vegan ){
            prompt += templatePrompt.isVegan;
        }

        if( dataUser.foodRestriction ){
            prompt += templatePrompt.typeOfDisease === 'otros' 
                        ? haveCondition.replace('[CONDICION]',templatePrompt.otherTypeOfDisease) 
                        : haveCondition.replace('[CONDICION]',templatePrompt.typeOfDisease);
        }

        console.log( prompt );

        const result = await model.generateContent(prompt);
        console.log(result.response.text());

        setMenu({
            response : result.response.text(),
            showResponse: true
        });
        return menu;

    };
}
