import { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css';

const Main = () => {
    let meals = [];
    const [items, setItems] = useState([]);
    function getData() {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res1 => {
                axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork')
                    .then(res2 => {
                        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')
                            .then(res3 => {
                                meals = [...res1.data.meals, ...res2.data.meals, ...res3.data.meals];
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
    }
    useEffect(() => {
        getData();
    }, []);
    function handleClick(id) {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                console.log(res.data.meals[0], items.filter((item) => item.idMeal === id)[0]);
                setItems(oldMeal => [{ ...oldMeal.filter((meal) => meal.idMeal === id)[0], ...res.data.meals[0] }]);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const itemsList = items.map(({ strMeal, strMealThumb, idMeal, strInstructions, strIngredient1, strIngredient10, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strArea, strCategory, strTags, strYoutube }) => {
        if (items.length === 1) {
            return <>
                <div onClick={getData} style={{ background: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${strMealThumb})`, backgroundRepeat: 'no - repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="bg-container">
                    <div className="card2">
                        <div>
                            <img src={strMealThumb} alt="" />
                        </div>
                        <section className="content">
                            <h1>{strMeal}</h1>
                            <h3>#{idMeal}</h3>
                            <h4>Country: {strArea}</h4>
                            <h6>Ingredient: {strIngredient1}, {strIngredient10}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5},{strIngredient6}, {strIngredient7}, {strIngredient8}, {strIngredient9}</h6>
                            <p>{strInstructions}</p>
                            <a href={strYoutube}>Watch Video</a>
                        </section>
                    </div>
                </div>
            </>;
        }

        return (
            <section onClick={() => handleClick(idMeal)} key={idMeal} className="card">
                <img src={strMealThumb} alt="" />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        );
    });
    return (
        <div className={items.length !== 1 ? "items-container" : 'item-container'}>
            {itemsList}
        </div>
    );
};

export default Main;
