import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Categories = ({ categories }) => {
  const {grid, card} = styles;
  return(
    <ul className={grid}>
      {categories.map(item => (
        <li className={card} key={item.idCategory}>
          <Link href={`/category/${item.strCategory.toLowerCase()}`}>
            <a>
              <h2>{item.strCategory}</h2>
              <div>
                <img src={item.strCategoryThumb} alt={`photo ${item.strCategory}`}/>
              </div>
            </a>
          </Link>
        </li>
      ))
    }
  </ul>
)};
  
export default Categories;
  