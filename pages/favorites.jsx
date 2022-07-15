import Link from 'next/link';
import { Cards } from '../components/Cards';
import { removeRecipes } from '../context/helpers';
import { useFavoritesContext } from '../context/favoritesContext';

export default function Favorites() {
  const { favorites } = useFavoritesContext();

  if (!favorites.length) return (
    <>
      <h1>You don't have any favorite recipes</h1>
      <p>Want to add?</p>
      <Link href="/">
        <a>Go to Home Page</a>
      </Link>
    </>
  )

  return (
    <>
      <h1>
        Your Favorites recipes
      </h1>
      <Cards
        withButton
        type="Meal"
        srcIcon="/minus.ico"
        categories={favorites}
        handleClick={removeRecipes}
        ariaLabel="Remove recipe from favorites"
      />
    </>
  )
}

