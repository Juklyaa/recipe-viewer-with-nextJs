import { useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { env } from '../../next.config';
import Button from '../../components/Button';
import { addRecipeToFavors } from '../../context/helpers';
import { useFavoritesContext } from '../../context/favoritesContext';
import { findMealById, getArrayValuesByString } from '../../shared/helpers';
import styles from '../../styles/Meal.module.css';

const MealRecipe = () => {
  const { query } = useRouter();
  const { favorites, setFavorites} = useFavoritesContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    recipe,
    grid,
    listIngredients,
    link,
    area,
    container,
    addFavoriteButton,
    favoriteRecipe,
    instructionContainer
  } = styles;

  const key = `${env.FIND_PHP_URL}?i=${query.idMeal}`;

  const { data, error } = useSWR(
    query.idMeal ? key : null,
    findMealById
  );
  
  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
  
  const [meal] = data.meals;

  const ingredients = getArrayValuesByString(meal, 'strIngredient');
  const measures = getArrayValuesByString(meal, 'strMeasure');

  const addFavoritesRecipe = () => {
    if(!isFavorite) {
      addRecipeToFavors(favorites, setFavorites, meal);
      setIsFavorite(true);
    }
  }

  return(
    <div className={container}>
      <div className={grid}>
        <h1>{meal.strMeal}</h1>
        <p className={area}>From {meal.strArea}</p>

        <div className={recipe}>
          <div>
            <Image src={meal.strMealThumb} alt={`photo ${meal.strMeal}`} width={500} height={500}/>
          </div>
          <div className={listIngredients}>
            <h2>You need:</h2>
            <ul>
              {ingredients.map((ingredient, i) => 
                <li key={`${ingredient}${i}`}>{ingredient} - {measures[i]}</li>
              )}
            </ul>
            </div>
        </div>
        <div className={instructionContainer}>
          <p>{meal.strInstructions}</p>
        </div>
        <p>Do you need more instructions? Go to youtube and see
          <a href={meal.strYoutube} target={"_blank"} className={link}>the video</a>
        </p>
      </div>
      <Button
        className={`${addFavoriteButton} ${isFavorite ? favoriteRecipe : ''}`}
        handlerClick={addFavoritesRecipe}
        srcIcon="/favorite.ico"
        text={`${isFavorite ? 'Added to favorite recipes' : 'Add to favorite recipes'}`}
      />
    </div>
  );
};

export default MealRecipe;
