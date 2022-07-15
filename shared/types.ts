import { Dispatch, SetStateAction} from 'react';

export interface IMeal {
  idMeal: string,
  strMeal: string,
  strCategory: string,
  strArea: string,
  strInstructions: string, 
  strMealThumb: string,
  strIngredient1: string,
  strYoutube: string
}

export interface ICategory {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string
}

export interface IMealInCategory {
  strMeal: string,
  strMealThumb: string,
  idMeal: string
}

export interface IComponentProps {
  favorites: IMeal[];
  setFavorites: Dispatch<SetStateAction<IMeal[]>>;
}