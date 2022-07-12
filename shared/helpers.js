export const BASE_PHP_URL = process.env.BASE_PHP_URL;
export const FILTER_PHP_URL = process.env.FILTER_PHP_URL;
export const URL_SEARCH = process.env.URL_SEARCH;

export const fetchData = async (param) => {
    const res = await fetch(`${BASE_JSON_URL}${URL_SEARCH}${param}`);
    return await res.json();
  };

export const fetchFilterData = async (param) => {
  const res = await fetch(`${FILTER_PHP_URL}${URL_SEARCH}${param}`);
  return await res.json();
};

export const cutName = name => {
  return name.length < 20 ? name : `${name.slice(0,25)}...`
}