import { Cards } from '../../components/Cards';
import { addRecipeToFavors } from '../../context/helpers';
import { BASE_PHP_URL, filterMealsByCategory } from '../../shared/helpers';

const MealsPage = ({ meals, type }) => {
  return(
    <>
      <h1>{type.to}</h1>
      <p>The best meals from different countries</p>
      <Cards
        withButton
        type="Meal"
        categories={meals}
        srcIcon="/favorite.ico"
        handleClick={addRecipeToFavors}
        ariaLabel="Add the recipe to favorites"
      />
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
  const products = await filterMealsByCategory(params.type);

  return {
    props: {
      meals: products.meals,
      type: params.type,
    },
  };
};

export default MealsPage;
