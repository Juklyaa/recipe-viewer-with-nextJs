import React, { useState, FC, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { useFavoritesContext } from '../context/favoritesContext';
import { IMeal, IMealInCategory } from '../shared/types';
import styles from '../styles/components.module.css';

export interface ICardComponent {
  type: string,
  withButton?: boolean,
  srcIcon?: string,
  handleClick?: (favorites: IMeal[], setFavorites: Dispatch<SetStateAction<IMeal[]>>, item: IMeal | IMealInCategory) => void,
  ariaLabel?: string,
  width?:number,
  height?:number
}

interface IProps extends ICardComponent { 
  item: IMeal | IMealInCategory
}

export const Card: FC<IProps> =({
  item,
  type,
  withButton,
  srcIcon,
  handleClick,
  ariaLabel,
  width = 300,
  height = 300
}) => {
  const {addFavoriteButtonSmall, favoriteRecipe} = styles;
  const {favorites, setFavorites} = useFavoritesContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const handlerOnClick = (e: React.ChangeEvent<EventTarget>):void => {
    e.preventDefault();
    e.stopPropagation();
    if(!isFavorite) {
      handleClick(favorites, setFavorites, item);
      setIsFavorite(true);
    }
  }

  const key = `str${type}`;

  const getUrl = ():string => {
    if(type === 'Meal') {
      const id = item[`id${type}`];
      return `/${type.toLowerCase()}/${id}`
    }
      
    return `/${type.toLowerCase()}/${item[key].toLowerCase()}`
  };

  return(
    <Link href={getUrl()}>
      <a>
        <h2>{item[key]}</h2>
        <div>
          <Image src={item[`${key}Thumb`]} alt={`photo tasty ${item[key]}`} width={width} height={height}/>
        </div>
        {
          withButton && (
            <Button
              className={`${addFavoriteButtonSmall} ${isFavorite ? favoriteRecipe : ''}`}
              handlerClick={handlerOnClick}
              srcIcon={srcIcon}
              ariaLabel={ariaLabel}
            />
          )
        }
      </a>
    </Link>
)};
