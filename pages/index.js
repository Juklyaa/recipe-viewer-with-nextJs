import styles from '../styles/Home.module.css'
import { Cards } from '../components/Cards';
import { BASE_PHP_URL } from '../shared/helpers';

export default function Home({categories}) {

  return (
    <>
      <h1 className={styles.title}>
        The best recipes
      </h1>
      <Cards categories={categories} type="Category" />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(BASE_PHP_URL);
  const products = await res.json();

  return {
    props: {
      categories: products.categories,
    },
  };
};
