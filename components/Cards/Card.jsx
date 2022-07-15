import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button';
import {useFavoritesContext} from '../../context/favoritesContext';
import { cutName } from '../../shared/helpers';
import styles from '../../styles/components.module.css';

const Card = ({ item, type, withButton, srcIcon, handleClick, ariaLabel }) => {
  const {addFavoriteButtonSmall, favoriteRecipe} = styles;
  const {favorites, setFavorites} = useFavoritesContext();
  const [loved, setLoved] = useState(false);

  const handlerOnClick = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if(!loved) {
      handleClick(favorites, setFavorites, item);
      setLoved(true)
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
        <h2>{cutName(item[key])}</h2>
        <div>
          <img src={item[`${key}Thumb`]} alt={`photo tasty ${item[key]}`}/>
        </div>
        {
          withButton && (
            <Button
              className={`${addFavoriteButtonSmall} ${loved ? favoriteRecipe : ''}`}
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