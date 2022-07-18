import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { CardsList } from '../../components/CardsList';
import { addRecipeToFavors } from '../../context/helpers';
import { getCategory, filterMealsByCategory } from '../../shared/helpers';
import { IMealInCategory,  ICategory } from '@shared/types';

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
  fallback: true;
}> => {
  const products = await getCategory();

  const allPaths = products.categories.map((product:ICategory) => ({
    params: { type: product.strCategory.toLowerCase() },
  }));

  const paths = Array.from(new Set(allPaths.map((item) => JSON.stringify(item)))).map(
    (item: string):string => JSON.parse(item)
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const list = await filterMealsByCategory(params.type);

  return {
    props: {
      meals: list.meals,
      type: params.type,
    },
    revalidate: 60
  };
};

export default MealsPage;
