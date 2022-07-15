import React, { FC } from 'react';
import { Card, ICardComponent } from '@components/Card';
import styles from '@styles/components.module.css';
import { IMeal, IMealInCategory } from '@shared/types';

interface IListCard extends ICardComponent { 
  categories: IMeal[] | IMealInCategory[]
}

export const CardsList: FC<IListCard> = (props) => {
  const {grid, card} = styles;
  const {categories, type} = props;

  return(
    <ul className={grid}>
      {categories.map((item: IMeal | IMealInCategory) => (
        <li className={card} key={item[`id${type}`]}>
          <Card item={item} {...props}/>
        </li>
      ))
    }
  </ul>
)};
