export const addRecipeToFavors = (favorites, setFavorites, meal) => {
  if (favorites.length === 0) {
      setFavorites([meal]);
  } else {
    if (!favorites.some((item) => item.idMeal === meal.idMeal)) {
      setFavorites([...favorites, meal]);
    }
  }
};

export const removeRecipes = (favorites, setFavorites, meal) => {
  setFavorites(favorites.filter(item => item.idMeal !== meal.idMeal));
};
