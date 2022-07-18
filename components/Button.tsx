import React, { FC } from 'react'
import Image from 'next/image';
import styles from '@styles/components.module.css';

interface IButton {
  handlerClick: React.MouseEventHandler<HTMLButtonElement>,
  className: string,
  text?: string,
  ariaLabel?: string
  srcIcon?: string,
}

const Button: FC<IButton> =
 ({
  className,
  handlerClick,
  srcIcon,
  text,
  ariaLabel=""
}) => {

  return (
    <button 
      onClick={handlerClick}
      className={`${styles.btn} ${className}`}
      aria-label={ariaLabel}
    >
      {srcIcon ? <Image src={srcIcon} alt="icon" aria-hidden="true" width={30} height={30}/> : null}
      {text}
    </button>
  );
};

export default Button;
