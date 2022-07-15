import { IMeal } from 'shared/types';


export const addRecipeToFavors = (favorites: IMeal[], setFavorites: any, meal: IMeal) => {
  if (favorites.length === 0) {
      setFavorites([meal]);
  } else {
    if (!favorites.some((item: IMeal) => item.idMeal === meal.idMeal)) {
      setFavorites([...favorites, meal]);
    }
  }
};

export const removeRecipes =  (favorites: IMeal[], setFavorites: any, meal: IMeal) => {
  setFavorites(favorites.filter((item: IMeal) => item.idMeal !== meal.idMeal));
};
