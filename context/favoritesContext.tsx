import {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
  FC,
} from 'react';

import { IMeal, setFavoritesT } from '../shared/types';

type FavoritesContextT = {
  favorites: IMeal[];
  setFavorites: setFavoritesT;
};

export const FavoritesContext = createContext<FavoritesContextT>({
  favorites: [],
  setFavorites: () => [],
});

export const useFavoritesContext = (): FavoritesContextT => {
  return useContext(FavoritesContext);
};

export const FavoritesContextProvider: FC<{children: ReactNode}> = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    setFavorites(favorites ? JSON.parse(favorites) : []);
  }, [])


  useEffect(() => {
    if (favorites.length) {
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
