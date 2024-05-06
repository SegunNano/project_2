import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import './Main.css';

const Main = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res1 => {
                axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork')
                    .then(res2 => {
                        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')
                            .then(res3 => {
                                const meals = [...res1.data.meals, ...res2.data.meals, ...res3.data.meals];
                                setItems(meals);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section key={uuid()} className="card">
                <img src={strMealThumb} alt="" />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        );
    });
    return (
        <div className="items-container">
            {itemsList}
        </div>
    );
};

export default Main;
