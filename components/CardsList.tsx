import React, { FC } from 'react';
import { Card, ICardComponent, CardT } from '@components/Card';
import styles from '@styles/components.module.css';

interface IListCard extends ICardComponent { 
  categories: CardT[]
}

export const CardsList: FC<IListCard> = (props) => {
  const {grid, card} = styles;
  const {categories, type} = props;

  return(
    <ul className={grid}>
      {categories.map((item: CardT) => (
        <li className={card} key={item[`id${type}`]}>
          <Card item={item} {...props}/>
        </li>
      ))
    }
  </ul>
)};
