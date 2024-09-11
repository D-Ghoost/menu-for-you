
export const useGetDataForm = ( formData, haveFoodRestriction = false ) => {

    const generalData = {
        priority: formData.get('priority'),
        vegetarian: formData.get('vegetarian'),
        vegan: formData.get('vegan'),
        favoriteFoods: formData.get('favoriteFoods'),
        notFavoriteFoods: formData.get('notFavoriteFoods'),
        userWeight: formData.get('userWeight'),
        userWeight: formData.get('userWeight'),
        userHeight: formData.get('userHeight')
    };

    if( haveFoodRestriction ){
        const dataFoodRestriction = {
            foodRestriction: formData.get('foodRestriction'),
            typeOfDisease: formData.get('typeOfDisease'),
            otherTypeOfDisease: formData.get('otherTypeOfDisease'),
        };

        const data = {...generalData, ...dataFoodRestriction};

        return data
        
    }

    return generalData;
}
