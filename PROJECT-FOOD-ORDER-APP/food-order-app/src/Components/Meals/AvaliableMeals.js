import React, { useEffect, useState } from "react";

import Card from './../UI/Card';
import MealItem from "./MealItem/MealItem";

import classes from './AvailableMeals.module.css';

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

const AvalibleMeals = props => {

    const [mealsData, setMealsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://food-order-app-e3266-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Something Went Wrong!!');
            }

            const data = await response.json();

            let loadedData = [];

            for (let key in data) {
                const obj = {
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                }
                loadedData.push(obj);
            }

            setMealsData(loadedData);
        } catch (error) {
            setHttpError(error.message);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const mealsList = mealsData.map(meal => { return <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description} /> });

    let content;
    if (isLoading) {
        content = <p className={classes.isLoading}>Loading...</p>;
    } else {
        content = <ul>
            {mealsList}
        </ul>
    }

    if (httpError) {
        content = <p className={classes['http-error']}>{httpError}</p>;
    }

    return <section className={classes.meals}>
        <Card>
            {content}
        </Card>
    </section>

};

export default AvalibleMeals;