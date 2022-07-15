import Image from 'next/image';
import styles from '../styles/components.module.css'

const Button = ({
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
      { srcIcon ? <Image src={srcIcon} alt="icon" aria-hidden="true" width={30} height={30}/> : null}
      {text}
    </button>
  );
};

export default Button;
