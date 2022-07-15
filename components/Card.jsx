import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import {useFavoritesContext} from '../context/favoritesContext';
import styles from '../styles/components.module.css';

const Card = ({ item, type, withButton, srcIcon, handleClick, ariaLabel, width = 300, height = 300 }) => {
  const {addFavoriteButtonSmall, favoriteRecipe} = styles;
  const {favorites, setFavorites} = useFavoritesContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const handlerOnClick = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if(!isFavorite) {
      handleClick(favorites, setFavorites, item);
      setIsFavorite(true);
    }
  }

  const key = `str${type}`;

  const getUrl = item => {
    if(type === 'Meal') {
      const id = item[`id${type}`];
      return `/${type.toLowerCase()}/${id}`
    }
      
    return `/${type.toLowerCase()}/${item[key].toLowerCase()}`
  };

  return(
    <Link href={getUrl(item)}>
      <a>
        <h2>{item[key]}</h2>
        <div>
          <Image src={item[`${key}Thumb`]} alt={`photo tasty ${item[key]}`} width={width} height={height}/>
        </div>
        {
          withButton && (
            <Button
              className={`${addFavoriteButtonSmall} ${isFavorite ? favoriteRecipe : ''}`}
              handlerClick={(e) => handlerOnClick(e,item)}
              srcIcon={srcIcon}
              ariaLabel={ariaLabel}
            />
          )
        }
      </a>
    </Link>
)};
  
export default Card;
