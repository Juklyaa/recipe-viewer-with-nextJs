import React from 'react';
import Card from './Card';
import styles from '../styles/components.module.css';

export const CardsList = (props) => {
  const {grid, card} = styles;
  const {categories, type} = props;

  return(
    <ul className={grid}>
      {categories.map(item => (
        <li className={card} key={item[`id${type}`]}>
          <Card item={item} {...props}/>
        </li>
      ))
    }
  </ul>
)};
