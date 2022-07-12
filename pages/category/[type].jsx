import { BASE_PHP_URL, fetchFilterData, cutName } from '../../shared/helpers';
import styles from '../../styles/Home.module.css';

const MealsPage = ({
  meals,
  type,
}) => {
  const {grid, card} = styles;

  return(
    <>
      <h2>{type}</h2>
      <p>The best meals from different countries</p>
      <ul className={grid}>
        {meals.map( meal => (
          <li className={card} key={meal.idMeal}>
            <h3>{cutName(meal.strMeal)}</h3>
            <div>
              <img src={meal.strMealThumb} alt={`photo ${meal.strMeal}}`} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};


export const getStaticPaths = async () => {
  const res = await fetch(BASE_PHP_URL);
  const products = await res.json();

  const allPaths = products.categories.map((product) => ({
    params: { type: product.strCategory.toLowerCase() },
  }));

  const paths = Array.from(new Set(allPaths.map(JSON.stringify))).map(
    (i) => JSON.parse(i)
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const products = await fetchFilterData(params.type);

  return {
    props: {
      meals: products.meals,
      type: params.type,
    },
  };
};

export default MealsPage;
