import React from 'react';

import MealsSummary from './MealsSummary';
import AvalibleMeals from './AvaliableMeals';

const Meals = props => {
    return <React.Fragment>
        <MealsSummary />
        <AvalibleMeals />
    </React.Fragment>
};

export default Meals;