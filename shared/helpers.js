export const BASE_PHP_URL = process.env.BASE_PHP_URL;
export const FIND_PHP_URL = process.env.FIND_PHP_URL;
export const FILTER_PHP_URL = process.env.FILTER_PHP_URL;

export const URL_SEARCH_MEAL = process.env.URL_SEARCH_MEAL;
export const URL_SEARCH_CATEGORY = process.env.URL_SEARCH_CATEGORY;

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = res.json();
  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data;
};

export const findMealById = async (url) => await fetchData(url);
export const filterMealsByCategory = async (category) => await fetchData(`${FILTER_PHP_URL}${URL_SEARCH_CATEGORY}${category}`);

export const cutName = name => {
  return name.length < 22 ? name : `${name.slice(0,22)}...`
};

export const getArrayValuesByString = (arr, str) => {
  const keys = Object.keys(arr).filter(item => {
    return item.includes(str) && arr[item];
  })
  return keys.map(key => arr[key]);
};