export const addRecipeToFavors = (favorites, setFavorites, meal) => {
  if (favorites.length === 0) {
      setFavorites([meal]);
    } else {
      setFavorites(
        favorites.some((item) => item.idMeal === meal.idMeal)
        ? [...favorites.filter((item) => item.idMeal !== meal.idMeal)]
        : [...favorites, meal]
        );
    }
};

export const removeRecipes = (favorites, setFavorites, meal) => {
  setFavorites(favorites.filter(item => item.idMeal !== meal.idMeal));
};
