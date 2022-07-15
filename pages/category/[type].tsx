import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { CardsList } from '../../components/CardsList';
import { addRecipeToFavors } from '../../context/helpers';
import { BASE_PHP_URL, filterMealsByCategory } from '../../shared/helpers';
import { IMealInCategory,  ICategory } from '@shared/types';
import { listenerCount } from 'process';

interface IMealsPage {
  meals: IMealInCategory[]
  type: string,
}

const MealsPage: NextPage<IMealsPage> = ({ meals, type }) => {
  return(
    <>
      <h1>{type}</h1>
      <p>The best meals from different countries</p>
      <CardsList
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

export const getStaticPaths: GetStaticPaths = async ():Promise<{
  paths: string[];
  fallback: false;
}> => {
  const res = await fetch(BASE_PHP_URL);
  const products = await res.json();

  const allPaths = products.categories.map((product:ICategory) => ({
    params: { type: product.strCategory.toLowerCase() },
  }));

  const paths = Array.from(new Set(allPaths.map(JSON.stringify))).map(
    (item: string):string => JSON.parse(item)
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const list = await filterMealsByCategory(params.type);

  return {
    props: {
      meals: list.meals,
      type: params.type,
    },
  };
};

export default MealsPage;
