import styles from '../styles/Home.module.css'
import { CardsList } from '../components/CardsList';
import { BASE_PHP_URL } from '../shared/helpers';

export default function Home({categories}) {
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

export const getStaticProps = async () => {
  const res = await fetch(BASE_PHP_URL);
  const products = await res.json();

  return {
    props: {
      categories: products.categories,
    },
  };
};
