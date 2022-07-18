import { GetStaticProps, NextPage } from 'next';
import styles from '@styles/Home.module.css'
import { CardsList } from '@components/CardsList';
import { getCategory } from '@shared/helpers';
import { ICategory } from '@shared/types';

const Home: NextPage<{ categories: ICategory[] }> = ({categories}) => {
  return (
    <>
      <h1 className={styles.title}>
        The best recipes
      </h1>
      <CardsList
        categories={categories}
        type="Category"
        width={320}
        height={200}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getCategory();

  return {
    props: {
      categories: products.categories,
    },
    revalidate: 60
  };
};

export default Home;
