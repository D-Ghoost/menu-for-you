
export const useGetDataForm = ( formData, haveFoodRestriction = false ) => {

    let data = {};

    const generalData = {
        priority: formData.get('priority'),
        favoriteFoods: formData.get('favoriteFoods'),
        notFavoriteFoods: formData.get('notFavoriteFoods'),
        userWeight: formData.get('userWeight'),
        userHeight: formData.get('userHeight')
    };

    
    for (const key in generalData) {
        if( !generalData[key] ){
            return null;
        }
    }



    if( haveFoodRestriction ){
        const dataFoodRestriction = {
            foodRestriction: formData.get('foodRestriction'),
            typeOfDisease: formData.get('typeOfDisease'),
            otherTypeOfDisease: formData.get('otherTypeOfDisease'),
        };

        if( dataFoodRestriction.typeOfDisease === 'otros' &&  !dataFoodRestriction.otherTypeOfDisease ){
            return null;
        }


        data = {
            ...generalData, 
            ...dataFoodRestriction,
            vegetarian: formData.get('vegetarian'),
            vegan: formData.get('vegan'),
        };
        return data
        
    }

    data = {
        ...generalData, 
        vegetarian: formData.get('vegetarian'),
        vegan: formData.get('vegan'),
    };

    return data;
}
