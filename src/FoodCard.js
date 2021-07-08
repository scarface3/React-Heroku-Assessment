import React, { useState, useEffect } from "react";
import classes from "./FoodCard.module.css";
import ReactStars from "react-rating-stars-component";

const FoodCard = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(
        "https://asm-dev-api.herokuapp.com/api/v1/food"
      );
      const a = await response.json();
      setMeals(a.data.meals);
    }
    fetchFood();
  }, []);

  return (
    <div className={classes.grid}>
      {meals.map((e) => (
        <main className={classes.a} key={Math.random()}>
          <article className={classes.gridArticle}>
            <img src={e.strMealThumb} alt="" />
            <article className={classes.cardFood_Price}>
              <h3>{e.strMeal}</h3>
              <p>{e.price}</p>
            </article>
            <div className={classes.text}>
              <p>{e.description.slice(600)}</p>
              <ReactStars count={5} value={e.ratings} activeColor={"#e9970a"} />
              <div className={classes.screen}>
                <div className={classes.innerdiv}>+</div>
              </div>
            </div>
          </article>
        </main>
      ))}
    </div>
  );
};

export default FoodCard;
