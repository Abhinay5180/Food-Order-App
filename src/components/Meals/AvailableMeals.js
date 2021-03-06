import { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';


  
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://fooddata-6d9ee-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const responseData = await response.json();
      const loadedMeals = [];
       
      for (const key in responseData){
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);
  const mealsList = meals.map(meal => 
    (
    <MealItem 
    id={meal.id} 
    key={meal.id} 
    name={meal.name} 
    description={meal.description}
     price={meal.price} />
     ));
  return <section className={classes.meals}>
    <Card>
      <ul>
        {mealsList}
      </ul>
    </Card>
  </section>
}

export default AvailableMeals;
