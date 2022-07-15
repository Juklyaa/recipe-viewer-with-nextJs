import {
  createContext,
  useEffect,
  useContext,
  useState,
} from 'react';

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => [],
});

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

export const FavoritesContextProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    setFavorites(favorites ? JSON.parse(favorites) : []);
  }, [])


  useEffect(() => {
    if (favorites) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);
  

  const value = {
    favorites,
    setFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
