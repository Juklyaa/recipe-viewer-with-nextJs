import { IMeal, IMealInCategory, ICategory } from '@shared/types';
export const BASE_PHP_URL = process.env.BASE_PHP_URL;
export const FIND_PHP_URL = process.env.FIND_PHP_URL;
export const FILTER_PHP_URL = process.env.FILTER_PHP_URL;

export const URL_SEARCH_MEAL = process.env.URL_SEARCH_MEAL;
export const URL_SEARCH_CATEGORY = process.env.URL_SEARCH_CATEGORY;

const fetchData = async<T> (url: string): Promise<T> => {
  const res = await fetch(url);
  return res.json();
};

interface IMeals {
  meals: IMeal[]
}

interface IMealsByCategory {
  meals: IMealInCategory[]
}

interface ICategories {
  categories: ICategory[]
}

export const getCategory = async (): Promise<ICategories> =>
  await fetchData<ICategories>(BASE_PHP_URL);

export const findMealById = async (url: string):Promise<IMeals> =>
  await fetchData<IMeals>(url);

export const filterMealsByCategory = async (category: string | string[]):Promise<IMealsByCategory> =>
  await fetchData<IMealsByCategory>(`${FILTER_PHP_URL}${URL_SEARCH_CATEGORY}${category}`);

export const getArrayValuesByString = (arr: IMeal, str: string):string[] => {
  const keys = Object.keys(arr).filter(item => {
    return item.includes(str) && arr[item];
  })
  return keys.map(key => arr[key]);
};